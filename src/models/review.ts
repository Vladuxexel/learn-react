export interface Review {
    id: string;
    user: string;
    text: string;
    rating: number;
}

export interface NormalizedReview {
    id: string;
    userId: string;
    text: string;
    rating: number;
}
