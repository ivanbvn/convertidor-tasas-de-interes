export const resetSelect = () => {
  const selects = document.getElementsByTagName("select");

  for (let index = 0; index < selects.length; index++) {
    selects[index].options.selectedIndex = 0;
  }
};
