// const para = document.querySelector("p");

function abcd(para: HTMLParagraphElement){
    // Using type assertion with `as` syntax
    (document.querySelector("p") as HTMLParagraphElement);
    
    // Alternative angle bracket syntax (not recommended in TSX/React files)
    <HTMLParagraphElement>document.querySelector("p");
}