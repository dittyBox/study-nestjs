export class ResponseMessage{
    private data: any | any[]; //response data
    private code: number; // response code

    public success(): ResponseMessage{
        this.code = 1;
        return this;
    }

    public error(code: number, message: string = "Error"): ResponseMessage{
        this.code = code;
        this.data = {message};
        return this;
    }

    public body(data: any | any[] = ''): ResponseMessage{
        this.data = data;
        return this;
    }

    get Data(): any | any[]{
        return this.data;
    }

    get Code(): number {
        return this.code;
    }

    public build(): Response{
        return new Response(this);
    }
}

export class Response{
    data: any | any[];
    code: number;

    constructor(message: ResponseMessage){
        this.data = message.Data;
        this.code = message.Code;
    }
}


/*
API응답은 항상 아래의 구조를 가지게 된다.
{
    "code":1, 정상은 1 비정상은 약속된 에러코드를 반환
    "data":{
        모든 데이터는 이곳에서 처리됨 내부에 데이터가 추가되거나 삭제되어도 클라이언트는
        data라는 프로퍼티를 파싱하면 수정된 데이터 이외 기존 데이터를 사용하는 코드들은 
        수정될 필요없이 정상적으로 수행되는 효과가 있음
    }
}

*/