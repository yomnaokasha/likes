var likeone = [9, 12, 9];
function addone(index) {
  likeone[index]++;
  document.getElementById(`likeone${index}`).innerText = likeone[index];
}
