export function insertBody(elx:any, parent?:any){
  let bodyx = parent ? parent : document.body
  bodyx.insertBefore(elx, bodyx.firstChild)
}
