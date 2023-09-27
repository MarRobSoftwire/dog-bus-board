export type DogResponse = {
    status: "success";
    message: string;
} | {
    status: "error";
    code: number;
    message: string;
};

