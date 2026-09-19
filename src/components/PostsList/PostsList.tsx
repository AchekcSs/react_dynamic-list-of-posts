import React from 'react';
import { Post } from '../../types/Post';
import { PostItem } from '../PostItem/PostItem';

type Props = {
  posts: Post[];
  selectedPost: Post | null;
  onPostSelected: (newSelectedPost: Post | null) => void;
};

export const PostsList: React.FC<Props> = ({
  posts,
  selectedPost,
  onPostSelected,
}) => (
  <div data-cy="PostsList">
    <p className="title">Posts:</p>

    <table className="table is-fullwidth is-striped is-hoverable is-narrow">
      <thead>
        <tr className="has-background-link-light">
          <th>#</th>
          <th>Title</th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            selectedPost={selectedPost}
            onPostSelected={onPostSelected}
          />
        ))}

        {/*<tr data-cy="Post">
          <td data-cy="PostId">18</td>

          <td data-cy="PostTitle">
            voluptate et itaque vero tempora molestiae
          </td>

          <td className="has-text-right is-vcentered">
            <button
              type="button"
              data-cy="PostButton"
              className="button is-link"
            >
              Close
            </button>
          </td>
        </tr>*/}
      </tbody>
    </table>
  </div>
);
