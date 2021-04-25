const menus = [
  {
    path: "/home",
    name: "主页",
    icon: "HomeFilled"
  },
  {
    path: "/table",
    name: "表单",
    icon: "DatabaseFilled",
    children: [
      {
        path: "/table/basic",
        name: "基础表单",
      },
      {
        path: "/table/step",
        name: "分布表单"
      },
      {
        path: "/table/advanced",
        name: "高级表单"
      }
    ]
  },
  {
    path: "/result",
    name: "结果页",
    icon: "TagFilled",
    children: [
      {
        path: "/result/success",
        name: "成功页"
      },
      {
        path: "/result/failure",
        name: "失败页"
      }
    ]
  },
  {
    path: "/exception",
    name: "异常",
    icon: "BugFilled",
    children: [
      {
        path: "/exception/error",
        name: "Error"
      },
      {
        path: "/exception/not-found",
        name: "Not Found"
      },
      {
        path: "/exception/forbidden",
        name: "Forbidden"
      }
    ]
  },
  {
    path: "/chart",
    name: "图表",
    icon: "PieChartFilled",
    children: [
      {
        path: "/chart/echarts",
        name: "Echarts",
        children: [
          {
            path: "/chart/echarts/line",
            name: "Line"
          },
          {
            path: "/chart/echarts/pie",
            name: "Pie"
          }
        ]
      },
      {
        path: "/chart/d3",
        name: "D3"
      }
    ]
  }
];
export default menus;
