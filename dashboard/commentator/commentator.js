const commentatorNameReplicant = nodecg.Replicant("commentatorName")

document.getElementById('update').addEventListener("click", () => {
  commentatorNameReplicant.value = document.getElementById('commentator').value
})