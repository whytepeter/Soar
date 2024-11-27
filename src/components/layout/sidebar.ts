import { MenuItemsType } from "../base/MenuItem";
import { ROUTES } from "@/routes";

import homeIcon from "@/assets/icon/home.svg";
import homeActiveIcon from "@/assets/icon/home-active.svg";

import transactionIcon from "@/assets/icon/transaction.svg";
import transactionActiveIcon from "@/assets/icon/transaction-active.svg";

import accountIcon from "@/assets/icon/account.svg";
import accountActiveIcon from "@/assets/icon/account-active.svg";

import investmentIcon from "@/assets/icon/investment.svg";
import investmentActiveIcon from "@/assets/icon/investment-active.svg";

import cardsIcon from "@/assets/icon/cards.svg";
import cardsActiveIcon from "@/assets/icon/cards-active.svg";

import privilegeIcon from "@/assets/icon/privilege.svg";
import privilegeActiveIcon from "@/assets/icon/privilege-active.svg";

import loanIcon from "@/assets/icon/loan.svg";
import loanActiveIcon from "@/assets/icon/loan-active.svg";

import serviceIcon from "@/assets/icon/service.svg";
import serviceActiveIcon from "@/assets/icon/service-active.svg";

import settingsIcon from "@/assets/icon/settings.svg";
import settingsActiveIcon from "@/assets/icon/settings-active.svg";

export const SIDEBAR_ITEMS: MenuItemsType[] = [
  {
    name: "Dashboard",
    slug: "dashboard",
    icon: homeIcon,
    active: homeActiveIcon,
    to: ROUTES.Dashboard,
  },
  {
    name: "Transactions",
    slug: "transactions",
    icon: transactionIcon,
    active: transactionActiveIcon,
    to: ROUTES.Transaction,
  },
  {
    name: "Account",
    slug: "account",
    icon: accountIcon,
    active: accountActiveIcon,
    to: ROUTES.Accounts,
  },
  {
    name: "Investments",
    slug: "investments",
    icon: investmentIcon,
    active: investmentActiveIcon,
    to: ROUTES.Investments,
  },
  {
    name: "Credit Card",
    slug: "credit",
    icon: cardsIcon,
    active: cardsActiveIcon,
    to: ROUTES.CreditCard,
  },
  {
    name: "Loans",
    slug: "loans",
    icon: loanIcon,
    active: loanActiveIcon,
    to: ROUTES.Loans,
  },
  {
    name: "Services",
    slug: "services",
    icon: serviceIcon,
    active: serviceActiveIcon,
    to: ROUTES.Services,
  },
  {
    name: "My Privileges",
    slug: "privilege",
    icon: privilegeIcon,
    active: privilegeActiveIcon,
    to: ROUTES.Privileges,
  },
  {
    name: "Settings",
    slug: "settings",
    icon: settingsIcon,
    active: settingsActiveIcon,
    to: ROUTES.Settings,
    redirect: `${ROUTES.Settings}/profile`,
  },
];
