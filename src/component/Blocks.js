import React from "react";
import { Container, Button } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import Editor from "@ckeditor/ckeditor5-build-classic";

const Blocks = ({
  topicSubtopicArray,
  topicSubtopicIndex,
  blockArray,
  updateArticleState
}) => {
  const jsxArray = blockArray.map((block, blockIndex) => {
    return (
      <Container key={blockIndex}>
        <CKEditor
          editor={Editor}
          data={block}
          onChange={(event, editor) =>
            blockChange(editor.getData(), blockIndex)
          }
        />
        {topicSubtopicIndex ? (
          <span>
            <Button onClick={() => addBlock(blockIndex)} icon="plus circle" />
            <Button onClick={() => deleteBlock(blockIndex)} icon="trash" />
          </span>
        ) : (
          ""
        )}
      </Container>
    );
  });

  const blockChange = (value, index) => {
    blockArray[index] = value;
    updateArticleState(topicSubtopicArray);
  };

  const addBlock = index => {
    blockArray.splice(index + 1, 0, "");
    updateArticleState(topicSubtopicArray);
  };

  const deleteBlock = index => {
    blockArray.splice(index, 1);
    updateArticleState(topicSubtopicArray);
  };

  return jsxArray;
};

export default Blocks;