export class Image {
  constructor(
    public  id='',
    public  name='',
    public  type='',
    public  picByte='',
    _links : {
      "self" : {
        "href" : string;
      },
      "imageModel" : {
        "href" : string;
      },
      "projet" : {
        "href" : string;
      }
    }


  ){}
}
