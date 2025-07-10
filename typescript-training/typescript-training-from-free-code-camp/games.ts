export const gameScores = [14, 21, 33, 42, 59]
export const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
export const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

export function getLastItem<T>(array: T[]): T | undefined {
    return array[array.length - 1]
}
