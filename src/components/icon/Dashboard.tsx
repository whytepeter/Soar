import { IconProps } from "@/types";

export default function DashboardIcon({ color }: IconProps) {
  return (
    <>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_13_2607)">
          <path
            d="M19.4603 9.19904C19.4598 9.19858 19.4594 9.19812 19.4589 9.19766L11.3005 1.03955C10.9527 0.69165 10.4904 0.5 9.99862 0.5C9.50682 0.5 9.04448 0.691498 8.69658 1.0394L0.54244 9.19339C0.539693 9.19614 0.536947 9.19904 0.5342 9.20178C-0.179911 9.92001 -0.17869 11.0853 0.53771 11.8017C0.865011 12.1292 1.29729 12.3188 1.75948 12.3387C1.77825 12.3405 1.79717 12.3414 1.81624 12.3414H2.14141V18.3453C2.14141 19.5334 3.10805 20.5 4.29641 20.5H7.48824C7.81173 20.5 8.07418 20.2377 8.07418 19.9141V15.207C8.07418 14.6649 8.51516 14.2239 9.0573 14.2239H10.9399C11.4821 14.2239 11.9231 14.6649 11.9231 15.207V19.9141C11.9231 20.2377 12.1854 20.5 12.509 20.5H15.7008C16.8892 20.5 17.8558 19.5334 17.8558 18.3453V12.3414H18.1573C18.649 12.3414 19.1113 12.1499 19.4594 11.802C20.1765 11.0844 20.1768 9.91711 19.4603 9.19904V9.19904Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_13_2607">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
