import { useState, useEffect } from "react";

export default function useSiteData(initialData) {
  const [data, setData] = useState("");

  function boxClickHandler(id) {
    console.log("Clicked!", id);
    setSelected(id);
  }

  function transformInitialData(initialData) {
    let transformedData = initialData.boxes.map((content) => {
      return { ...content, selected: false };
    });
    return { ...initialData, boxes: [...transformedData] };
    // return { boxes: [...transformedData] };
    // return transformedData;
  }

  useEffect(() => {
    setData(transformInitialData(initialData));
  }, [initialData]);

  function setSelected(index) {
    const { boxes } = data;
    const selectedBox = boxes[index];
    let selected = selectedBox.selected;
    selected = !selected;
    console.log(selected);

    const newBox = { ...selectedBox, selected };
    boxes[index] = newBox;
    console.log(boxes);

    const newData = { ...data, boxes: [...boxes] };
    // console.log(newData);

    setData(newData);
  }

  return {
    data,
    setData,
    boxClickHandler,
  };
}
