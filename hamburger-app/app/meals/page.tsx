import Link from "next/link"

export default function MealPage() {
    return (
        <main>
            <h1>Meal Page</h1>
            <p><Link href="/meals/share">share</Link></p>
            <p><Link href="/meals/post-1">meal-post-1</Link></p>
            <p><Link href="/meals/post-2">meal-post-2</Link></p>
            <p><Link href="/meals/post-3">meal-post-3</Link></p>
        </main>
    )
}