function imgError(image) {
  var img_type = image.id;
  image.onerror = "";
  if (img_type == 106) {
     image.src = rel_img_url + "default-106x106.jpg";
  }
  if (img_type == 180) {
     image.src = rel_img_url + "default-180x90.jpg";
  }
  if (img_type == 278) {
     image.src = rel_img_url + "default-278x185.jpg";
  }
  if (img_type == 300) {
     image.src = rel_img_url + "default-320x160.jpg";
  }
  if (img_type == 320) {
     image.src = rel_img_url + "default-320x160.jpg";
  }
  if (img_type == 1050) {
     image.src = rel_img_url + "default-1050x700.jpg";
  }
  return true;
}
