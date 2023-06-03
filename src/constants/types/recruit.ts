export interface RecruitPostType {
  title: string;
  introduce: string;
  organizationType: '동아리' | '대외활동' | '스타트업' | '소모임' | '기타';
  target: string;
  recruitStartDate: string;
  recruitEndDate: string;
  activityStartDate: string;
  acitivityEndDate: string;
  recruitCount: number;
  content: string;
  recruitURL: string;
  thumbnailImg: string;
}