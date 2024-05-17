export interface SwitcherProps {
  $is_active: boolean;
}
export interface ToNextButtonProps {
  $reversed?: boolean;
  $needtohide?: boolean;
}
export interface SwitcherPageProps {
  activePage: number;
  setActivePage: (num: number) => void;
}
