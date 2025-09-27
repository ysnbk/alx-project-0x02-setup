export interface CardProps {
    title: string;
    content: string
}
export interface ButtonProps {
    size: "small" | "medium" | "large";
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}
export interface CardProps {
    title: string;
    content: string
}
export interface PostProps {
    title: string;
    content: string;
    userId: number
}
export interface UserProps{
    name: string;
    email: string;
    address: string;
}