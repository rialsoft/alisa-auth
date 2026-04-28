export default function showToast(elem:HTMLElement, timeout:number=3):void {
  const toast = elem;
  toast.className = "toast show";
  setTimeout(function(){ 
    toast.className = toast.className.replace("show", ""); 
  }, timeout * 1000);
}
