import { createServer, Model } from "miragejs";

createServer({
  models: {
    jishos: Model,
  },

  seeds(server) {
    server.create("jisho", {
      key: "1",
      word: "立体音",
      meaning: "3D sound",
      pronunciation: "Rittai-on",
      type: "phone",
    });
    server.create("jisho", {
      key: "2",
      word: "発信",
      meaning: "Outgoing",
      pronunciation: "hasshin",
      type: "phone",
    });
    server.create("jisho", {
      key: "3",
      word: "不在着信",
      meaning: "missed call",
      pronunciation: "fuzai",
      type: "phone",
    });
    server.create("jisho", {
      key: "4",
      word: "1,455件",
      meaning: "1,455 items",
      pronunciation: "1,455-ken",
      type: "phone",
    });
    server.create("jisho", {
      key: "5",
      word: "WINDOWS用",
      meaning: "For WINDOWS",
      pronunciation: "WINDOWS-yō",
      type: "phone",
    });
    server.create("jisho", {
      key: "6",
      word: "辞める",
      meaning: "quit",
      pronunciation: "yameru",
      type: "phone",
    });
    server.create("jisho", {
      key: "8",
      word: "箱",
      meaning: "box",
      pronunciation: "bako",
      type: "dict",
    });
    server.create("jisho", {
      key: "9",
      word: "ごみ箱",
      meaning: "trash can",
      pronunciation: "Gomibako",
      type: "dict",
    });
    server.create("jisho", {
      key: "10",
      word: "1件の通知",
      meaning: "1 notification",
      pronunciation: "1-ken no tsūchi",
      type: "phone",
    });
    server.create("jisho", {
      key: "11",
      word: "基本的な",
      meaning: "Basic (adj)",
      pronunciation: "Kihon-tekina",
      type: "dict",
    });
    server.create("jisho", {
      key: "12",
      word: "基本",
      meaning: "basic (noun)",
      pronunciation: "Kihon",
      type: "dict",
    });
    server.create("jisho", {
      key: "13",
      word: "以外",
      meaning: "other than",
      pronunciation: "Igai",
      type: "dict",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/jishos", (schema, request) => {
      return schema.jishos.all();
    });

    this.get("/jishos/:id", (schema, request) => {
      const id = request.params.id;
      return schema.jishos.find(id);
    });
  },
});
