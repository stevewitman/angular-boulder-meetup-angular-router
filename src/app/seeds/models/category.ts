export interface Category {
  id: string;
  url: string;
  description: string;
  seqNo: number;
  iconUrl: string;
  varietiesCount: number;
  seedGroup: string;
}

export function sortCategoriesBySeqNo(c1: Category, c2: Category) {
  return c1.seqNo - c2.seqNo;
}
