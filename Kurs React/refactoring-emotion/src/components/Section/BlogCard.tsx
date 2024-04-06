import React from 'react';
import styled from '@emotion/styled';
import Section from './Section';

const BlogPostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const BlogPostContainer = styled.div`
  border-radius: 10px;
  padding: 20px;
  text-align: left;
`;

const BlogPosth3 = styled.h3`
  margin-bottom: 10px;
`;

const BlogPostp = styled.p`
  margin-bottom: 10px;
`;

const BlogPostButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
`;

interface BlogCardIProps {
    blogPosts: {
        id: number;
        title: string;
        date: string;
        content: string;
    }[];
}

export default function BlogCard({blogPosts}: BlogCardIProps) {
    return(
        <Section id="blog">
          <div>
            <h2>Latest Blog Posts</h2>
            <BlogPostsContainer>
              {blogPosts.map((post) => (
                <BlogPostContainer key={post.id}>
                  <BlogPosth3>{post.title}</BlogPosth3>
                  <BlogPostp>{post.date}</BlogPostp>
                  <BlogPostp>{post.content}</BlogPostp>
                  <BlogPostButton>Read More</BlogPostButton>
                </BlogPostContainer>
              ))}
            </BlogPostsContainer>
          </div>
        </Section>
    );
}