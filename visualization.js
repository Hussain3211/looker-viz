const dscc = window.dscc;

dscc.subscribeToData(function(data) {
  const container = document.getElementById("viz");
  container.innerHTML = "";

  const row = data.tables.DEFAULT[0];
  const raw = row["examples"]; // Replace with your actual field
  if (!raw) return;

  const lines = raw.split(/\n|,\s*/);
  const list = document.createElement("ul");
  lines.forEach(url => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = url.trim();
    a.textContent = url.trim();
    a.target = "_blank";
    li.appendChild(a);
    list.appendChild(li);
  });

  container.appendChild(list);
});
