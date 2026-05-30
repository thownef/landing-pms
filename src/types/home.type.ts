export type HomeRichTextChild = {
  text: string | null;
  type: string | null;
  bold?: boolean | null;
  italic?: boolean | null;
  underline?: boolean | null;
};

export type HomeRichTextBlock = {
  type: string | null;
  children: HomeRichTextChild[] | null;
};

export type HomeApiStat = {
  title: string | null;
  subTitle: string | null;
  moTa: string | null;
  icon: string | null;
};

export type HomeApiMetric = {
  ten: string | null;
  moTa: string | null;
  donVi: string | null;
};

export type HomeApiCard = {
  name: string | null;
  noiDung: string | null;
  note?: string | null;
  icon?: string | null;
};

export type HomeApiProcedure = {
  stt: string | null;
  name: string | null;
  noiDung: string | null;
};

export type HomeApiData = {
  gioiThieu: string | null;
  slogan: HomeRichTextBlock[] | null;
  noiDung: HomeRichTextBlock[] | null;
  button: string | null;
  tenCongTy: string | null;
  moTaCongTy: string | null;
  phuongCham: string | null;
  tieuDe1: string | null;
  tieuDePhu1: string | null;
  noiDung1: string | null;
  tieuDe2: string | null;
  tieuDePhu2: string | null;
  noiDung2: string | null;
  tieuDe3: string | null;
  tieuDePhu3: string | null;
  stat: HomeApiStat[] | null;
  hangMuc: HomeApiMetric[] | null;
  trietLy: HomeApiCard[] | null;
  procedure: HomeApiProcedure[] | null;
  camKet: HomeApiCard[] | null;
};

export type HomeStat = {
  title: string;
  subTitle: string;
  moTa: string;
  icon: string | null;
};

export type HomeMetric = {
  ten: string;
  moTa: string;
  donVi: string;
};

export type HomeCard = {
  name: string;
  noiDung: string;
  note: string;
  icon: string | null;
};

export type HomeProcedure = {
  stt: string;
  name: string;
  noiDung: string;
};

export type HomeContent = {
  gioiThieu: string;
  slogan: HomeRichTextBlock[];
  noiDung: HomeRichTextBlock[];
  button: string;
  tenCongTy: string;
  moTaCongTy: string;
  phuongCham: string;
  tieuDe1: string;
  tieuDePhu1: string;
  noiDung1: string;
  tieuDe2: string;
  tieuDePhu2: string;
  noiDung2: string;
  tieuDe3: string;
  tieuDePhu3: string;
  stat: HomeStat[];
  hangMuc: HomeMetric[];
  trietLy: HomeCard[];
  procedure: HomeProcedure[];
  camKet: HomeCard[];
};
