const treeData = {
  name: "root-parent-L0",
  toggled: true,
  children: [
    {
      name: "parentL1-1",
      children: [
        {
          name: "child L2.1",
          children: [{ name: "childL3 1.1.1" }, { name: "childL3 1.1.2" }]
        },
        {
          name: "child L2.2",
          children: [{ name: "childL3 1.2.1" }, { name: "childL3 1.2.2" }]
        },
        {
          name: "child L2.3",
          children: [{ name: "childL3 1.3.1" }, { name: "childL3 1.3.2" }]
        }
      ]
    },
    {
      name: "parentL1-2",
      children: [
        {
          name: "child L2.1",
          children: [{ name: "childL3 2.1.1" }, { name: "childL3 2.1.2" }]
        },
        {
          name: "child L2.2",
          children: [{ name: "childL3 2.2.1" }, { name: "childL3 2.2.2" }]
        },
        {
          name: "child L2.3",
          children: [{ name: "childL3 2.3.1" }, { name: "childL3 2.3.2" }]
        }
      ]
    },
    {
      name: "parentL1-3",
      loading: true,
      children: []
    }
  ]
};

export default treeData;
