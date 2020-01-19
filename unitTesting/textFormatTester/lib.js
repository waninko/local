function fixText(txt){
    txt = txt.trim();
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
}