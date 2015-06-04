
function picSwap(image) {
	image.src = "/Icons/CoolFolder.png";
};
function swapBack(image, set) {
	if(set == 1) {
		image.src = "icons/Apple_Folder_HD_by_JackXan256.png";
	}else if (set == 2){
		image.src = "icons/CoolFolder.png";
	} else {image.src = "icons/games_folder_icon_by_zeaig-d3e0nvc256.png";}
};
