export interface StatItem {
  value: string;
  label: string;
  ariaLabel: string;
}

export const statItems: StatItem[] = [
  { value: '2Y 10M', label: '운영 기간', ariaLabel: '운영 기간 2년 10개월' },
  { value: '100%', label: '퍼블리싱 단독 담당', ariaLabel: '퍼블리싱 단독 담당 100%' },
  { value: '3건', label: '선별 케이스', ariaLabel: '선별 케이스 3건' },
];
