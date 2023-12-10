export type TAuthState = {
    success: boolean;
    loading: boolean;
    currentUser: TCurrentUser | null;
    error: string;
};

interface TCurrentUser {
    user: User;
    tokens: Tokens;
}

interface User {
    role: string;
    email: string;
    name: string;
    codes: Code[];
    deviceTokens: any[];
    id: string;
}

interface Code {
    _id: string;
    code: string;
    expirationDate: string;
    used: boolean;
    codeType: string;
}

interface Tokens {
    access: Access;
    refresh: Refresh;
}

interface Access {
    token: string;
    expires: string;
}

interface Refresh {
    token: string;
    expires: string;
}
