import $http from "./index";
export const getUserInfo = (params) => {
  return $http({
    methods: "get",
    url: "/user/userInfo",
    params,
  });
};

export const login = (data) => {
  return $http({
    methods: "post",
    url: "/user/login",
    data,
  });
};
