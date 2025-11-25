# FeedPost Component: Notes & Docs

## Generating Arrays for Image Grids (e.g., Explore Page)

### How to Generate an Array of Random Image URLs

We use the following pattern to create an array of image URLs for grid layouts:

```js
const images = Array.from(
  { length: 100 },
  (_, i) => `https://loremflickr.com/300/300?random=${i}`
);
```

#### Explanation:

- `Array.from({ length: 100 })` creates an array-like object with 100 empty slots.
- The second argument (mapping function) is called for each index (i from 0 to 99).
- For each index, we return a string URL for a random image from LoremFlickr.
- 'Empty' here means the array has no values yet, just slots to fill.
- After mapping, each slot contains a unique image URL string.

#### Example Output:

```
[
  "https://loremflickr.com/300/300?random=0",
  "https://loremflickr.com/300/300?random=1",
  ...
]
```

#### Usage in React:

```jsx
return (
  <div className="explore-grid">
    {images.map((src, idx) => (
      <img key={idx} src={src} alt="explore" className="explore-img" />
    ))}
  </div>
);
```

This approach is useful for generating mock data and displaying grids of images in components like Explore or Feed.

---
