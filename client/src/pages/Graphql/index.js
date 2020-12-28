import React, { useState, useEffect, useCallback, useRef } from "react";
import "@/common/css/base.less";
import "./index.less";
import { Form, Input, Button, message, Checkbox } from "antd";
import { routePaths, historyPush, getHistory } from "@/router";
import { query, mutation } from "@/common/js/request/index";
import { checkPhone, checkUser, checkPassword } from "@/utils";
import Store, { mapRedux } from "@/redux";

import CodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/sql-hint.js";
import "codemirror/mode/xml/xml";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/sql/sql";
import "codemirror/addon/hint/show-hint.js";

import "codemirror/theme/blackboard.css";
import "codemirror/lib/codemirror.css";
// require active-line.js
import "codemirror/addon/selection/active-line.js";
// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
// hint
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/sql-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/javascript-hint.js";
// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/match-highlighter.js";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/mode/sql/sql.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";
// foldGutter
// import 'codemirror/addon/fold/foldgutter.css'
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";

// 编辑的主题文件
import "codemirror/theme/monokai.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/erlang-dark.css";
import "codemirror/theme/yonce.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Index = (props) => {
  const [code, setCode] = useState("");
  const [data, setData] = useState("");

  const updateCode = useCallback((code) => {
    setCode(code);
    console.log("code===", code);
  }, []);

  const updateData = useCallback((data) => {
    setData(data);
    console.log("data===", data);
  }, []);
  const options = {
    lineNumbers: true, // 显示行号
    lineWrapping: true, // 自动换行
    styleActiveLine: true, // 选中行高亮
    mode: "text/javascript",
    theme: "erlang-dark", // 主题配置
    matchBrackets: true, // 匹配括号
    extraKeys: { Ctrl: "autocomplete" }, //自动提示配置
    gutters: ["CodeMirror-lint-markers"],
    lint: true, // 代码出错提醒
    indentUnit: 4, // 缩进配置（默认为2）
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    // theme: 'solarized light', // 主题
  };
  console.log("props=", props);

  useEffect(() => {}, []);
  return (
    <div className="graphql">
      <div className="button-box">
        <Button
          onClick={() => {
            query("hello(){}").then(() => {});
          }}
        >
          执行query查询
        </Button>
        <Button
          onClick={() => {
            mutation("hello(){}").then(() => {});
          }}
        >
          执行mutation突变
        </Button>
      </div>
      <div className="code-mirror-box">
        <ul>
          <li>
            <CodeMirror value={code} onChange={updateCode} options={options} />
          </li>
          <li>
            <CodeMirror
              value={data}
              onChange={updateData}
              options={{ ...options, theme: " base16-light" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default mapRedux(["user"])(Index);
