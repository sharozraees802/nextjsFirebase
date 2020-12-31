(() => {
  const btn = document.getElementById("generate_code");
  btn.addEventListener("click", generate_qr);

  function generate_qr() {
    const qr_url = document.getElementById("qr_url").value;
    const qr_width = document.getElementById("qr_width").value;
    const qr_height = document.getElementById("qr_height").value;
    const url = `https://chart.googleapis.com/chart?cht=qr&chl=${qr_url}&chs=${qr_width}x${qr_height}`;

    document.getElementById("qr_img").src = url;
  }
})();
