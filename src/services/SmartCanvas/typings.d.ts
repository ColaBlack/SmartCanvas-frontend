declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseChartVO_ = {
    code?: number;
    data?: ChartVO;
    message?: string;
  };

  type BaseResponseGenResultVO_ = {
    code?: number;
    data?: GenResultVO;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageChart_ = {
    code?: number;
    data?: PageChart_;
    message?: string;
  };

  type BaseResponsePageChartVO_ = {
    code?: number;
    data?: PageChartVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type Chart = {
    analyzedResult?: string;
    chartData?: string;
    chartName?: string;
    chartType?: string;
    createTime?: string;
    createrId?: number;
    generatedChart?: string;
    goal?: string;
    hasDeleted?: number;
    id?: number;
    updateTime?: string;
  };

  type ChartAddRequest = {
    chartData?: string;
    chartName?: string;
    chartType?: string;
    goal?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartName?: string;
    chartType?: string;
    goal?: string;
    id?: number;
  };

  type ChartQueryRequest = {
    chartName?: string;
    chartType?: string;
    creatorId?: number;
    current?: number;
    goal?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type ChartUpdateRequest = {
    analyzedResult?: string;
    chartData?: string;
    chartName?: string;
    chartType?: string;
    generatedChart?: string;
    goal?: string;
    id?: number;
  };

  type ChartVO = {
    analyzedResult?: string;
    chartData?: string;
    chartName?: string;
    chartType?: string;
    createTime?: string;
    generatedChart?: string;
    goal?: string;
    id?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type genChartByAiUsingPOSTParams = {
    chartName?: string;
    chartType?: string;
    goal?: string;
  };

  type GenResultVO = {
    option?: string;
    result?: string;
  };

  type getChartByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageChart_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Chart[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageChartVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ChartVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type User = {
    createTime?: string;
    hasDeleted?: number;
    id?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userAccount?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
