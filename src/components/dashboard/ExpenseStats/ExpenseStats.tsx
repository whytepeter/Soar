import Heading from "../../typography/Heading";
import Card from "../../base/Card";
import { cn } from "@/lib/utils";
import { useQuery } from "@/hooks/useQuery";
import { ExpenseStatistic } from "@/types";
import { getExpenseStats } from "@/lib/api/transaction";

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ExpenseChartLoader from "./ExpenseChartLoader";
import { useMemo } from "react";
import Show from "@/components/base/Show";

interface Props {
  className?: string;
}

export default function ExpenseStats({ className = "" }: Props) {
  const { data, loading } = useQuery<ExpenseStatistic[]>(getExpenseStats, []);

  const chartOptions: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "pie",
      },
      labels: data?.map((item) => item.category) || [],
      colors: ["#343C6A", "#396AFF", "#FC7900", "#232323"],
      stroke: {
        width: 4,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`,
        style: {
          fontSize: "16px",
        },
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    }),
    [data]
  );

  const chartSeries = useMemo(
    () => data?.map((item) => item.percentage) || [],
    [data]
  );

  return (
    <div className={cn("space-y-4", className)}>
      <Heading>Expense Statistics</Heading>
      <Card>
        <Show>
          <Show.When isTrue={loading}>
            <ExpenseChartLoader />
          </Show.When>
          <Show.When isTrue={!!data?.length}>
            <div className="mx-auto w-fit">
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="pie"
                width="350"
              />
            </div>
          </Show.When>
          <Show.Else>
            <p className="text-center text-dark-200 text-sm">
              No data available
            </p>
          </Show.Else>
        </Show>
      </Card>
    </div>
  );
}
