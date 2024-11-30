import Activity from "@/components/dashboard/Activity";
import BalanceHistory from "@/components/dashboard/BalanceHistory";
import ListCreditCards from "@/components/credit-card/MyCards";
import ExpenseStats from "@/components/dashboard/ExpenseStats";
import RecentTransaction from "@/components/transactions/RecentTransaction";
import QuickTransfer from "@/components/dashboard/transfer/QuickTransfer";

export default function Dashboard() {
  return (
    <main className="space-y-6 ">
      <div className="grid grid-cols-12 gap-6">
        <ListCreditCards className="col-span-12 lg:col-span-7  xl:col-span-8" />
        <RecentTransaction className="col-span-12 lg:col-span-5  xl:col-span-4" />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Activity className="col-span-12 lg:col-span-7  xl:col-span-8" />
        <ExpenseStats className="col-span-12 lg:col-span-5  xl:col-span-4" />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <QuickTransfer className="col-span-12   xl:col-span-5" />
        <BalanceHistory className="col-span-12   xl:col-span-7" />
      </div>
    </main>
  );
}
