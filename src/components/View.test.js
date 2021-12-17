import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import View from "./View";
import articleService from "../services/articleServices";

jest.mock("../services/articleServices");

test("renders zero articles without errors", async () => {
  articleService.mockResolvedValueOnce([]);
  render(<View />);

  await waitFor(() => {
    const articles = screen.queryAllByTestId(/article/i);
    expect(articles).toHaveLength(0);
  });
});

test("renders three articles without errors", async () => {
  articleService.mockResolvedValueOnce([
    {
      id: 1,
      headline: "Headline",
      createdOn: "6-6-6",
      author: "Some Guy",
      image: "Image",
      summary: "Summary",
      body: "Bodied",
    },
    {
      id: 2,
      headline: "Headline",
      createdOn: "6-6-6",
      author: "Some Guy",
      image: "Image",
      summary: "Summary",
      body: "Bodied",
    },
    {
      id: 3,
      headline: "Headline",
      createdOn: "6-6-6",
      author: "Some Guy",
      image: "Image",
      summary: "Summary",
      body: "Bodied",
    },
  ]);
  render(<View />);
  await waitFor(() => {
    const articles = screen.queryAllByTestId(/article/i);
    expect(articles).toHaveLength(3);
  });
});
// test("renders three articles without errors", async ()=> {
// });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.