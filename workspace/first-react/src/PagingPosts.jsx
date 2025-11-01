import { useState } from "react";
import "./PagingPosts.css";
import { useRef } from "react";

function PagingPosts() {
  const fileInputRef = useRef(null);
  const [posts, setPosts] = useState([]);

  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [maxPageButtons, setMaxPageButtons] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / recordsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };
  const loadData = () => {
    const file = fileInputRef.current.files[0];

    if (!file) {
      alert("파일을 선택해주세요!");
      return;
    }
    const reader = new FileReader();

    reader.onload = function (event) {
      try {
        const data = JSON.parse(event.target.result);

        setPosts(data.posts);
        // posts = data.posts;

        setCurrentPage(1);

        // renderTable()과 renderPagination()을 호출할 필요는 없다.
      } catch (e) {
        alert("파일 읽기 오류");
      }
    };
    reader.readAsText(file);
  };

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;

    const endIndex = startIndex + recordsPerPage - 1;

    // 주어진 시작인덱스부터 마지막 인덱스 직전까지 자름
    const currentposts = posts.slice(startIndex, endIndex + 1);

    return (
      <>
        {currentposts.map((post, index) => (
          <tr key={post.post_id || index}>
            <td>{post.post_id}</td>
            <td>{post.title}</td>
            <td>{post.author}</td>
            <td>{post.created_at}</td>
            <td>{post.tags.join(", ")}</td>
          </tr>
        ))}
      </>
    );
  };

  const renderPaginationButtons = () => {
    if (totalPages === 0) return;

    // 현재 페이지 앞에 표시되는 페이지 절반만큼 나와야 함
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));

    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    // 표시되는 페이지 버튼이 부족할 시 처음 페이지 조정
    // 부족할 시 마지막 페이지 기준으로 maxPageButtons 만큼 표시되도록 함
    // 6 7 8 9 10 이 나와야 하는 상황에서 10페이지가 없을 시
    // 6 7 8 9 가 나오는데 이떄 4 5 6 7 8 9 가 나오도록 함
    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    const buttons = [];
    // 처음 페이지로 이동하도록 함
    // 현재 페이지가 첫페이지가 아닐 경우 표시되도록 함
    if (currentPage > 1) {
      buttons.push(
        <button key="first" onClick={() => handlePageChange(1)}>
          {"<<"}
        </button>
      );
    }

    // 현재 표시되는 페이지들 이전 페이지로 이동하도록 함
    // 현재 페이지가 첫페이지가 아닐 경우 표시되도록 함
    if (startPage > 1) {
      buttons.push(
        <button key="prev" onClick={() => handlePageChange(startPage - 1)}>
          {"<"}
        </button>
      );
    }

    // 표시되는 페이지들을 표시
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? "current" : ""}
        >
          {i}
        </button>
      );
    }

    // 표시되는 마지막 페이지가 전체 페이지 번호보다 작을 경우 다음 화면 이동 버튼을 표시하도록 함
    if (endPage < totalPages) {
      buttons.push(
        <button onClick={() => handlePageChange(endPage + 1)}>{">"}</button>
      );
    }

    // 현재 페이지가 마지막 페이지 번호보다 작을 경우 다음 화면 이동 버튼을 표시하도록 함
    if (currentPage < totalPages) {
      buttons.push(
        <button onClick={() => handlePageChange(totalPages)}>{">>"}</button>
      );
    }
    return <>{buttons}</>;
  };

  return (
    <div className="container">
      <h1>게시글 페이징</h1>
      <input type="file" ref={fileInputRef} />
      <br />
      <br />
      페이지당 레코드 수:
      <input
        type="number"
        min="1"
        value={recordsPerPage}
        onChange={(e) => setRecordsPerPage(parseInt(e.target.value) || 1)}
      />{" "}
      페이지 버튼 최대 수:{" "}
      <input
        type="number"
        min="1"
        value={maxPageButtons}
        onChange={(e) => setMaxPageButtons(parseInt(e.target.value) || 1)}
      />
      <button onClick={loadData}>데이터 로드</button>
      <br />
      <br />
      <table id="postsTable">
        <thead>
          <tr>
            <th>게시글 ID</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성 시간</th>
            <th>태그</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="pagination">{renderPaginationButtons()}</div>
    </div>
  );
}

export default PagingPosts;
