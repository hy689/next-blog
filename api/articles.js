import $http from "./index";


export const apiArticleGetAll = (params) => {
  return $http({
    methods: "get",
    url: "/article/getAll",
    params,
  });
}

export const apiCategoryGetAll = (params) => {
  return $http({
    methods: "get",
    url: "/category/getAll",
    params,
  });
}

export const apiArticleDetail = (params) => {
  return $http({
    methods: "get",
    url: "/article/getById",
    params,
  });
}


