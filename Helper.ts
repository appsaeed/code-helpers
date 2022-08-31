class App {
  private tokenKey: string;

  constructor() {
    this.tokenKey =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  }
  public firstUpper(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  public token(length: number = 30): string {
    let a: string[] = this.tokenKey.split("");
    let b: number | string[] = [];
    let rand: number;
    for (let i = 0; i < length; i++) {
      rand = Number((Math.random() * (a.length - 1)).toFixed(0));
      b[i] = a[rand];
    }
    return b.join("");
  }
  public random(start: number = 10, end: number = 99): number {
    return Math.floor(Math.random() * end) + start;
  }

  public queryToJSON(query: string): object | [] | null {
    var obj: any = {};
    var qury = query.split("&");
    if (typeof qury === "object" && qury.length > 1) {
      for (let i = 0; i < qury.length; i++) {
        if (qury[i].split("=").length === 2) {
          const q = qury[i].split("=");
          obj[q[0]] = q[1];
        }
      }
      return obj;
    } else {
      return null;
    }
  }

  async copyImageClipboard(url: string) {
    try {
      const req = await fetch(url);
      const blob = await req.blob();
      navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("copied!");
    } catch (error) {
      console.log(error);
    }
  }
}
const app = new App();
