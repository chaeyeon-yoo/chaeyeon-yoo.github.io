export interface StatItem {
  value: string;
  label: string;
  /** 화면에는 보이지 않고 보조기술에만 읽히는 문장 */
  srText: string;
}

export const statItems: StatItem[] = [
  { value: '2Y 10M', label: '운영 기간', srText: '운영 기간 2년 10개월' },
  { value: '100%', label: '퍼블리싱 단독 담당', srText: '퍼블리싱 단독 담당 100%' },
  { value: '3건', label: '선별 케이스', srText: '선별 케이스 3건' },
];
