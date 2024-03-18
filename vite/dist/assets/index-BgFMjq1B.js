var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a, _b, _c, _d, _e, _f;
var $ = globalThis;
$.$$ = $;
(/* @__PURE__ */ __name(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  __name(getFetchOpts, "getFetchOpts");
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
  __name(processPreload, "processPreload");
}, "polyfill"))();
const $mol_ambient_ref = Symbol("$mol_ambient_ref");
const instances = /* @__PURE__ */ new WeakSet();
function $mol_delegate(proto, target) {
  const proxy = new Proxy(proto, {
    get: (_, field) => {
      const obj = target();
      let val = Reflect.get(obj, field);
      if (typeof val === "function") {
        val = val.bind(obj);
      }
      return val;
    },
    has: (_, field) => Reflect.has(target(), field),
    set: (_, field, value) => Reflect.set(target(), field, value),
    getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
    ownKeys: () => Reflect.ownKeys(target()),
    getPrototypeOf: () => Reflect.getPrototypeOf(target()),
    setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
    isExtensible: () => Reflect.isExtensible(target()),
    preventExtensions: () => Reflect.preventExtensions(target()),
    apply: (_, self2, args) => Reflect.apply(target(), self2, args),
    construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
    defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
    deleteProperty: (_, field) => Reflect.deleteProperty(target(), field)
  });
  instances.add(proxy);
  return proxy;
}
__name($mol_delegate, "$mol_delegate");
Reflect.defineProperty(
  $mol_delegate,
  Symbol.hasInstance,
  {
    value: (obj) => instances.has(obj)
  }
);
$.$mol_delegate = $mol_delegate;
const $mol_owning_map = /* @__PURE__ */ new WeakMap();
function $mol_owning_allow(having) {
  try {
    if (!having)
      return false;
    if (typeof having !== "object" && typeof having !== "function")
      return false;
    if (having instanceof $mol_delegate)
      return false;
    if (typeof having["destructor"] !== "function")
      return false;
    return true;
  } catch {
    return false;
  }
}
__name($mol_owning_allow, "$mol_owning_allow");
function $mol_owning_get(having, Owner) {
  if (!$mol_owning_allow(having))
    return null;
  while (true) {
    const owner = $mol_owning_map.get(having);
    if (!owner)
      return owner;
    if (!Owner)
      return owner;
    if (owner instanceof Owner)
      return owner;
    having = owner;
  }
}
__name($mol_owning_get, "$mol_owning_get");
function $mol_owning_check(owner, having) {
  if (!$mol_owning_allow(having))
    return false;
  if ($mol_owning_map.get(having) !== owner)
    return false;
  return true;
}
__name($mol_owning_check, "$mol_owning_check");
function $mol_owning_catch(owner, having) {
  if (!$mol_owning_allow(having))
    return false;
  if ($mol_owning_map.get(having))
    return false;
  $mol_owning_map.set(having, owner);
  return true;
}
__name($mol_owning_catch, "$mol_owning_catch");
function $mol_fail_hidden(error) {
  throw error;
}
__name($mol_fail_hidden, "$mol_fail_hidden");
const named = /* @__PURE__ */ new WeakSet();
function $mol_func_name(func) {
  let name = func.name;
  if ((name == null ? void 0 : name.length) > 1)
    return name;
  if (named.has(func))
    return name;
  for (let key in this) {
    try {
      if (this[key] !== func)
        continue;
      name = key;
      Object.defineProperty(func, "name", { value: name });
      break;
    } catch {
    }
  }
  named.add(func);
  return name;
}
__name($mol_func_name, "$mol_func_name");
$.$mol_ambient_ref = $mol_ambient_ref;
$.$mol_owning_get = $mol_owning_get;
$.$mol_fail_hidden = $mol_fail_hidden;
$.$mol_func_name = $mol_func_name;
const _$mol_object2 = class _$mol_object2 {
  constructor() {
    __publicField(this, _a);
    __publicField(this, _b, null);
  }
  get $() {
    if (this[$mol_ambient_ref])
      return this[$mol_ambient_ref];
    const owner = $mol_owning_get(this);
    return this[$mol_ambient_ref] = (owner == null ? void 0 : owner.$) || _$mol_object2.$;
  }
  set $(next) {
    if (this[$mol_ambient_ref])
      $mol_fail_hidden(new Error("Context already defined"));
    this[$mol_ambient_ref] = next;
  }
  static create(init) {
    const obj = new this();
    if (init)
      init(obj);
    return obj;
  }
  static [(_a = Symbol.toStringTag, _b = $mol_ambient_ref, Symbol.toPrimitive)]() {
    return this.toString();
  }
  static toString() {
    return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
  }
  static toJSON() {
    return this.toString();
  }
  destructor() {
  }
  static destructor() {
  }
  //[ Symbol.toPrimitive ]( hint: string ) {
  //	return hint === 'number' ? this.valueOf() : this.toString()
  //}
  toString() {
    return this[Symbol.toStringTag] || this.constructor.name + "<>";
  }
  // toJSON(): any {
  // 	return this.toString()
  // }
};
__name(_$mol_object2, "$mol_object2");
__publicField(_$mol_object2, "$", $);
let $mol_object2 = _$mol_object2;
$.$mol_object2 = $mol_object2;
const _$mol_object = class _$mol_object extends $mol_object2 {
  static make(config) {
    return super.create((obj) => {
      for (let key in config)
        obj[key] = config[key];
    });
  }
};
__name(_$mol_object, "$mol_object");
let $mol_object = _$mol_object;
function $mol_fail(error) {
  throw error;
}
__name($mol_fail, "$mol_fail");
let $mol_wire_auto_sub = null;
function $mol_wire_auto(next = $mol_wire_auto_sub) {
  return $mol_wire_auto_sub = next;
}
__name($mol_wire_auto, "$mol_wire_auto");
var $mol_wire_cursor = /* @__PURE__ */ (($mol_wire_cursor2) => {
  $mol_wire_cursor2[$mol_wire_cursor2["stale"] = -1] = "stale";
  $mol_wire_cursor2[$mol_wire_cursor2["doubt"] = -2] = "doubt";
  $mol_wire_cursor2[$mol_wire_cursor2["fresh"] = -3] = "fresh";
  $mol_wire_cursor2[$mol_wire_cursor2["final"] = -4] = "final";
  return $mol_wire_cursor2;
})($mol_wire_cursor || {});
$.$mol_fail = $mol_fail;
$.$mol_wire_auto = $mol_wire_auto;
$.$mol_wire_cursor = $mol_wire_cursor;
const _$mol_wire_pub = class _$mol_wire_pub extends Object {
  constructor() {
    super(...arguments);
    __publicField(this, "data", []);
    /**
     * Index of first subscriber.
     */
    __publicField(this, "sub_from", 0);
  }
  // Derived objects should be Arrays.
  static get [Symbol.species]() {
    return Array;
  }
  // 4B
  /**
   * All current subscribers.
   */
  get sub_list() {
    const res = [];
    for (let i = this.sub_from; i < this.data.length; i += 2) {
      res.push(this.data[i]);
    }
    return res;
  }
  /**
   * Has any subscribers or not.
   */
  get sub_empty() {
    return this.sub_from === this.data.length;
  }
  /**
   * Subscribe subscriber to this publisher events and return position of subscriber that required to unsubscribe.
   */
  sub_on(sub2, pub_pos) {
    const pos = this.data.length;
    this.data.push(sub2, pub_pos);
    return pos;
  }
  /**
   * Unsubscribe subscriber from this publisher events by subscriber position provided by `on(pub)`.
   */
  sub_off(sub_pos) {
    if (!(sub_pos < this.data.length)) {
      $mol_fail(new Error(`Wrong pos ${sub_pos}`));
    }
    const end = this.data.length - 2;
    if (sub_pos !== end) {
      this.peer_move(end, sub_pos);
    }
    this.data.pop();
    this.data.pop();
    if (this.data.length === this.sub_from)
      this.reap();
  }
  /**
   * Called when last sub was unsubscribed.
   **/
  reap() {
  }
  /**
   * Autowire this publisher with current subscriber.
   **/
  promote() {
    var _a2;
    (_a2 = $mol_wire_auto()) == null ? void 0 : _a2.track_next(this);
  }
  /**
   * Enforce actualization. Should not throw errors.
   */
  fresh() {
  }
  /**
   * Allow to put data to caches in the subtree.
   */
  complete() {
  }
  get incompleted() {
    return false;
  }
  /**
   * Notify subscribers about self changes.
   */
  emit(quant = $mol_wire_cursor.stale) {
    for (let i = this.sub_from; i < this.data.length; i += 2) {
      this.data[i].absorb(quant);
    }
  }
  /**
   * Moves peer from one position to another. Doesn't clear data at old position!
   */
  peer_move(from_pos, to_pos) {
    const peer = this.data[from_pos];
    const self_pos = this.data[from_pos + 1];
    this.data[to_pos] = peer;
    this.data[to_pos + 1] = self_pos;
    peer.peer_repos(self_pos, to_pos);
  }
  /**
   * Updates self position in the peer.
   */
  peer_repos(peer_pos, self_pos) {
    this.data[peer_pos + 1] = self_pos;
  }
};
__name(_$mol_wire_pub, "$mol_wire_pub");
let $mol_wire_pub = _$mol_wire_pub;
$["devtoolsFormatters"] || ($["devtoolsFormatters"] = []);
function $mol_dev_format_register(config) {
  $["devtoolsFormatters"].push(config);
}
__name($mol_dev_format_register, "$mol_dev_format_register");
let $mol_dev_format_head = Symbol("$mol_dev_format_head");
let $mol_dev_format_body = Symbol("$mol_dev_format_body");
$mol_dev_format_register({
  header: (val, config = false) => {
    if (config)
      return null;
    if (!val)
      return null;
    if ($mol_dev_format_head in val) {
      try {
        return val[$mol_dev_format_head]();
      } catch (error) {
        return $mol_dev_format_accent($mol_dev_format_native(val), "💨", $mol_dev_format_native(error), "");
      }
    }
    if (typeof val === "function") {
      return $mol_dev_format_native(val);
    }
    if (Symbol.toStringTag in val) {
      return $mol_dev_format_native(val);
    }
    return null;
  },
  hasBody: (val) => val[$mol_dev_format_body],
  body: (val) => val[$mol_dev_format_body]()
});
function $mol_dev_format_native(obj) {
  if (typeof obj === "undefined")
    return $mol_dev_format_shade("undefined");
  return [
    "object",
    {
      object: obj,
      config: true
    }
  ];
}
__name($mol_dev_format_native, "$mol_dev_format_native");
function $mol_dev_format_auto(obj) {
  if (obj == null)
    return $mol_dev_format_shade(String(obj));
  return [
    "object",
    {
      object: obj,
      config: false
    }
  ];
}
__name($mol_dev_format_auto, "$mol_dev_format_auto");
function $mol_dev_format_element(element, style, ...content) {
  const styles = [];
  for (let key in style)
    styles.push(`${key} : ${style[key]}`);
  return [
    element,
    {
      style: styles.join(" ; ")
    },
    ...content
  ];
}
__name($mol_dev_format_element, "$mol_dev_format_element");
function $mol_dev_format_span(style, ...content) {
  return $mol_dev_format_element(
    "span",
    {
      // 'vertical-align' : '8%',
      ...style
    },
    ...content
  );
}
__name($mol_dev_format_span, "$mol_dev_format_span");
let $mol_dev_format_div = $mol_dev_format_element.bind(null, "div");
$mol_dev_format_element.bind(null, "ol");
$mol_dev_format_element.bind(null, "li");
$mol_dev_format_element.bind(null, "table");
$mol_dev_format_element.bind(null, "tr");
$mol_dev_format_element.bind(null, "td");
let $mol_dev_format_accent = $mol_dev_format_span.bind(null, {
  "color": "magenta"
});
$mol_dev_format_span.bind(null, {
  "font-weight": "bold"
});
$mol_dev_format_span.bind(null, {
  "color": "green"
});
let $mol_dev_format_shade = $mol_dev_format_span.bind(null, {
  "color": "gray"
});
$mol_dev_format_div.bind(null, {
  "margin-left": "13px"
});
$.$mol_wire_pub = $mol_wire_pub;
$.$mol_wire_cursor = $mol_wire_cursor;
$.$mol_wire_auto = $mol_wire_auto;
$.$mol_fail = $mol_fail;
$.$mol_dev_format_head = $mol_dev_format_head;
$.$mol_dev_format_native = $mol_dev_format_native;
const _$mol_wire_pub_sub = class _$mol_wire_pub_sub extends $mol_wire_pub {
  constructor() {
    super(...arguments);
    __publicField(this, "pub_from", 0);
    // 4B
    __publicField(this, "cursor", $mol_wire_cursor.stale);
  }
  // 4B
  get temp() {
    return false;
  }
  get pub_list() {
    const res = [];
    const max = this.cursor >= 0 ? this.cursor : this.sub_from;
    for (let i = this.pub_from; i < max; i += 2) {
      if (this.data[i])
        res.push(this.data[i]);
    }
    return res;
  }
  track_on() {
    this.cursor = this.pub_from;
    const sub2 = $mol_wire_auto();
    $mol_wire_auto(this);
    return sub2;
  }
  promote() {
    if (this.cursor >= this.pub_from) {
      $mol_fail(new Error("Circular subscription"));
    }
    super.promote();
  }
  track_next(pub) {
    if (this.cursor < 0)
      $mol_fail(new Error("Promo to non begun sub"));
    if (this.cursor < this.sub_from) {
      const next = this.data[this.cursor];
      if (pub === void 0)
        return next ?? null;
      if (next === pub) {
        this.cursor += 2;
        return next;
      }
      if (next) {
        if (this.sub_from < this.data.length) {
          this.peer_move(this.sub_from, this.data.length);
        }
        this.peer_move(this.cursor, this.sub_from);
        this.sub_from += 2;
      }
    } else {
      if (pub === void 0)
        return null;
      if (this.sub_from < this.data.length) {
        this.peer_move(this.sub_from, this.data.length);
      }
      this.sub_from += 2;
    }
    this.data[this.cursor] = pub;
    this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
    this.cursor += 2;
    return pub;
  }
  track_off(sub2) {
    $mol_wire_auto(sub2);
    if (this.cursor < 0) {
      $mol_fail(new Error("End of non begun sub"));
    }
    for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
      const pub = this.data[cursor];
      pub.fresh();
    }
    this.cursor = $mol_wire_cursor.fresh;
  }
  pub_off(sub_pos) {
    this.data[sub_pos] = void 0;
    this.data[sub_pos + 1] = void 0;
  }
  destructor() {
    for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
      const sub2 = this.data[cursor];
      const pos = this.data[cursor + 1];
      sub2.pub_off(pos);
      this.data.pop();
      this.data.pop();
    }
    this.cursor = this.pub_from;
    this.track_cut();
    this.cursor = $mol_wire_cursor.final;
  }
  track_cut() {
    if (this.cursor < this.pub_from) {
      $mol_fail(new Error("Cut of non begun sub"));
    }
    let tail = 0;
    for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
      const pub = this.data[cursor];
      pub == null ? void 0 : pub.sub_off(this.data[cursor + 1]);
      if (this.sub_from < this.data.length) {
        this.peer_move(this.data.length - 2, cursor);
        this.data.pop();
        this.data.pop();
      } else {
        ++tail;
      }
    }
    for (; tail; --tail) {
      this.data.pop();
      this.data.pop();
    }
    this.sub_from = this.cursor;
  }
  complete() {
  }
  complete_pubs() {
    const limit = this.cursor < 0 ? this.sub_from : this.cursor;
    for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
      const pub = this.data[cursor];
      if (pub == null ? void 0 : pub.incompleted)
        return;
    }
    for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
      const pub = this.data[cursor];
      pub == null ? void 0 : pub.complete();
    }
  }
  absorb(quant = $mol_wire_cursor.stale) {
    if (this.cursor === $mol_wire_cursor.final)
      return;
    if (this.cursor >= quant)
      return;
    this.cursor = quant;
    this.emit($mol_wire_cursor.doubt);
  }
  [$mol_dev_format_head]() {
    return $mol_dev_format_native(this);
  }
  /**
   * Is subscribed to any publisher or not.
   */
  get pub_empty() {
    return this.sub_from === this.pub_from;
  }
};
__name(_$mol_wire_pub_sub, "$mol_wire_pub_sub");
let $mol_wire_pub_sub = _$mol_wire_pub_sub;
$.$mol_object2 = $mol_object2;
const _$mol_after_frame = class _$mol_after_frame extends $mol_object2 {
  constructor(task) {
    super();
    __publicField(this, "cancelled", false);
    __publicField(this, "promise");
    this.task = task;
    this.promise = _$mol_after_frame.promise.then(() => {
      if (this.cancelled)
        return;
      task();
    });
  }
  static get promise() {
    if (this._promise)
      return this._promise;
    return this._promise = new Promise((done) => {
      const complete = /* @__PURE__ */ __name(() => {
        this._promise = null;
        done();
      }, "complete");
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(complete);
      } else {
        setTimeout(complete, 16);
      }
    });
  }
  destructor() {
    this.cancelled = true;
  }
};
__name(_$mol_after_frame, "$mol_after_frame");
__publicField(_$mol_after_frame, "_promise", null);
let $mol_after_frame = _$mol_after_frame;
function $mol_promise_like(val) {
  return val && typeof val === "object" && "then" in val && typeof val.then === "function";
}
__name($mol_promise_like, "$mol_promise_like");
$.$mol_wire_pub_sub = $mol_wire_pub_sub;
$.$mol_after_frame = $mol_after_frame;
$.$mol_wire_cursor = $mol_wire_cursor;
$.$mol_promise_like = $mol_promise_like;
$.$mol_dev_format_head = $mol_dev_format_head;
$.$mol_dev_format_body = $mol_dev_format_body;
$.$mol_dev_format_native = $mol_dev_format_native;
$.$mol_dev_format_auto = $mol_dev_format_auto;
$.$mol_dev_format_div = $mol_dev_format_div;
$.$mol_dev_format_shade = $mol_dev_format_shade;
$.$mol_owning_check = $mol_owning_check;
$.$mol_fail_hidden = $mol_fail_hidden;
const handled = /* @__PURE__ */ new WeakSet();
const _$mol_wire_fiber = class _$mol_wire_fiber extends $mol_wire_pub_sub {
  constructor(id, task, host, args) {
    super();
    __publicField(this, _c);
    __publicField(this, "cache");
    this.task = task;
    this.host = host;
    if (args)
      this.data.push(...args);
    this.pub_from = this.sub_from = (args == null ? void 0 : args.length) ?? 0;
    this[Symbol.toStringTag] = id;
  }
  static plan() {
    if (this.plan_task)
      return;
    this.plan_task = new $mol_after_frame(() => {
      try {
        this.sync();
      } finally {
        _$mol_wire_fiber.plan_task = null;
      }
    });
  }
  static sync() {
    while (this.planning.size) {
      for (const fiber of this.planning) {
        this.planning.delete(fiber);
        if (fiber.cursor >= 0)
          continue;
        if (fiber.cursor === $mol_wire_cursor.final)
          continue;
        fiber.fresh();
      }
    }
    while (this.reaping.size) {
      const fibers = this.reaping;
      this.reaping = /* @__PURE__ */ new Set();
      for (const fiber of fibers) {
        if (!fiber.sub_empty)
          continue;
        fiber.destructor();
      }
    }
  }
  get args() {
    return this.data.slice(0, this.pub_from);
  }
  result() {
    if ($mol_promise_like(this.cache))
      return;
    if (this.cache instanceof Error)
      return;
    return this.cache;
  }
  get incompleted() {
    return $mol_promise_like(this.cache);
  }
  field() {
    return this.task.name + "<>";
  }
  plan() {
    _$mol_wire_fiber.planning.add(this);
    _$mol_wire_fiber.plan();
  }
  reap() {
    _$mol_wire_fiber.reaping.add(this);
    _$mol_wire_fiber.plan();
  }
  toString() {
    return this[Symbol.toStringTag];
  }
  toJSON() {
    return this[Symbol.toStringTag];
  }
  [(_c = Symbol.toStringTag, $mol_dev_format_head)]() {
    const cursor = {
      [$mol_wire_cursor.stale]: "🔴",
      [$mol_wire_cursor.doubt]: "🟡",
      [$mol_wire_cursor.fresh]: "🟢",
      [$mol_wire_cursor.final]: "🔵"
    }[this.cursor] ?? this.cursor.toString();
    return $mol_dev_format_div(
      {},
      $mol_owning_check(this, this.cache) ? $mol_dev_format_auto({
        [$mol_dev_format_head]: () => $mol_dev_format_shade(cursor),
        [$mol_dev_format_body]: () => $mol_dev_format_native(this)
      }) : $mol_dev_format_shade($mol_dev_format_native(this), cursor),
      $mol_dev_format_auto(this.cache)
    );
  }
  get $() {
    return (this.host ?? this.task)["$"];
  }
  emit(quant = $mol_wire_cursor.stale) {
    if (this.sub_empty)
      this.plan();
    else
      super.emit(quant);
  }
  fresh() {
    var _a2;
    if (this.cursor === $mol_wire_cursor.fresh)
      return;
    if (this.cursor === $mol_wire_cursor.final)
      return;
    check:
      if (this.cursor === $mol_wire_cursor.doubt) {
        for (let i = this.pub_from; i < this.sub_from; i += 2) {
          (_a2 = this.data[i]) == null ? void 0 : _a2.fresh();
          if (this.cursor !== $mol_wire_cursor.doubt)
            break check;
        }
        this.cursor = $mol_wire_cursor.fresh;
        return;
      }
    const bu = this.track_on();
    let result;
    try {
      switch (this.pub_from) {
        case 0:
          result = this.task.call(this.host);
          break;
        case 1:
          result = this.task.call(this.host, this.data[0]);
          break;
        default:
          result = this.task.call(this.host, ...this.args);
          break;
      }
      if ($mol_promise_like(result)) {
        const put = /* @__PURE__ */ __name((res) => {
          if (this.cache === result)
            this.put(res);
          return res;
        }, "put");
        result = Object.assign(result.then(put, put), {
          destructor: result["destructor"] ?? (() => {
          })
        });
        handled.add(result);
      }
    } catch (error) {
      if (error instanceof Error || $mol_promise_like(error)) {
        result = error;
      } else {
        result = new Error(String(error), { cause: error });
      }
      if ($mol_promise_like(result) && !handled.has(result)) {
        result = Object.assign(result.finally(() => {
          if (this.cache === result)
            this.absorb();
        }), {
          destructor: result["destructor"] ?? (() => {
          })
        });
        handled.add(result);
      }
    }
    if (!$mol_promise_like(result)) {
      this.track_cut();
    }
    this.track_off(bu);
    this.put(result);
  }
  refresh() {
    this.cursor = $mol_wire_cursor.stale;
    this.fresh();
  }
  /**
   * Synchronous execution. Throws Promise when waits async task (SuspenseAPI provider).
   * Should be called inside SuspenseAPI consumer (ie fiber).
   */
  sync() {
    if (!_$mol_wire_fiber.warm) {
      return this.result();
    }
    this.promote();
    this.fresh();
    if (this.cache instanceof Error) {
      return $mol_fail_hidden(this.cache);
    }
    if ($mol_promise_like(this.cache)) {
      return $mol_fail_hidden(this.cache);
    }
    return this.cache;
  }
  /**
   * Asynchronous execution.
   * It's SuspenseAPI consumer. So SuspenseAPI providers can be called inside.
   */
  async async() {
    while (true) {
      this.fresh();
      if (this.cache instanceof Error) {
        $mol_fail_hidden(this.cache);
      }
      if (!$mol_promise_like(this.cache))
        return this.cache;
      await Promise.race([this.cache, this.step()]);
      if (!$mol_promise_like(this.cache))
        return this.cache;
      if (this.cursor === $mol_wire_cursor.final) {
        await new Promise(() => {
        });
      }
    }
  }
  step() {
    return new Promise((done) => {
      const sub2 = new $mol_wire_pub_sub();
      const prev = sub2.track_on();
      sub2.track_next(this);
      sub2.track_off(prev);
      sub2.absorb = () => {
        done(null);
        sub2.destructor();
      };
    });
  }
};
__name(_$mol_wire_fiber, "$mol_wire_fiber");
__publicField(_$mol_wire_fiber, "warm", true);
__publicField(_$mol_wire_fiber, "planning", /* @__PURE__ */ new Set());
__publicField(_$mol_wire_fiber, "reaping", /* @__PURE__ */ new Set());
__publicField(_$mol_wire_fiber, "plan_task", null);
let $mol_wire_fiber = _$mol_wire_fiber;
function $mol_guid(length = 8, exists = () => false) {
  for (; ; ) {
    let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
    if (exists(id))
      continue;
    return id;
  }
}
__name($mol_guid, "$mol_guid");
$.$mol_guid = $mol_guid;
const $mol_key_store = /* @__PURE__ */ new WeakMap();
function $mol_key(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "symbol")
    return value.description;
  if (!value)
    return JSON.stringify(value);
  if (typeof value !== "object" && typeof value !== "function")
    return JSON.stringify(value);
  return JSON.stringify(value, (field, value2) => {
    if (typeof value2 === "bigint")
      return value2.toString() + "n";
    if (typeof value2 === "symbol")
      return value2.description;
    if (!value2)
      return value2;
    if (typeof value2 !== "object" && typeof value2 !== "function")
      return value2;
    if (Array.isArray(value2))
      return value2;
    const proto = Reflect.getPrototypeOf(value2);
    if (!proto)
      return value2;
    if (Reflect.getPrototypeOf(proto) === null)
      return value2;
    if ("toJSON" in value2)
      return value2;
    if (value2 instanceof RegExp)
      return value2.toString();
    if (value2 instanceof Uint8Array)
      return [...value2];
    let key = $mol_key_store.get(value2);
    if (key)
      return key;
    key = $mol_guid();
    $mol_key_store.set(value2, key);
    return key;
  });
}
__name($mol_key, "$mol_key");
let $mol_compare_deep_cache = /* @__PURE__ */ new WeakMap();
function $mol_compare_deep(left, right) {
  if (Object.is(left, right))
    return true;
  if (left === null)
    return false;
  if (right === null)
    return false;
  if (typeof left !== "object")
    return false;
  if (typeof right !== "object")
    return false;
  const left_proto = Reflect.getPrototypeOf(left);
  const right_proto = Reflect.getPrototypeOf(right);
  if (left_proto !== right_proto)
    return false;
  if (left instanceof Boolean)
    return Object.is(left.valueOf(), right["valueOf"]());
  if (left instanceof Number)
    return Object.is(left.valueOf(), right["valueOf"]());
  if (left instanceof String)
    return Object.is(left.valueOf(), right["valueOf"]());
  if (left instanceof Date)
    return Object.is(left.valueOf(), right["valueOf"]());
  if (left instanceof RegExp)
    return left.source === right.source && left.flags === right.flags;
  if (left instanceof Error)
    return left.message === right.message && left.stack === right.stack;
  let left_cache = $mol_compare_deep_cache.get(left);
  if (left_cache) {
    const right_cache = left_cache.get(right);
    if (typeof right_cache === "boolean")
      return right_cache;
  } else {
    left_cache = new WeakMap([[right, true]]);
    $mol_compare_deep_cache.set(left, left_cache);
  }
  let result;
  try {
    if (!left_proto)
      result = compare_pojo(left, right);
    else if (!Reflect.getPrototypeOf(left_proto))
      result = compare_pojo(left, right);
    else if (Symbol.toPrimitive in left)
      result = compare_primitive(left, right);
    else if (Array.isArray(left))
      result = compare_array(left, right);
    else if (left instanceof Set)
      result = compare_set(left, right);
    else if (left instanceof Map)
      result = compare_map(left, right);
    else if (ArrayBuffer.isView(left))
      result = compare_buffer(left, right);
    else if (Symbol.iterator in left)
      result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
    else
      result = false;
  } finally {
    left_cache.set(right, result);
  }
  return result;
}
__name($mol_compare_deep, "$mol_compare_deep");
function compare_array(left, right) {
  const len = left.length;
  if (len !== right.length)
    return false;
  for (let i = 0; i < len; ++i) {
    if (!$mol_compare_deep(left[i], right[i]))
      return false;
  }
  return true;
}
__name(compare_array, "compare_array");
function compare_buffer(left, right) {
  const len = left.byteLength;
  if (len !== right.byteLength)
    return false;
  if (left instanceof DataView)
    return compare_buffer(
      new Uint8Array(left.buffer, left.byteOffset, left.byteLength),
      new Uint8Array(right.buffer, left.byteOffset, left.byteLength)
    );
  for (let i = 0; i < len; ++i) {
    if (left[i] !== right[i])
      return false;
  }
  return true;
}
__name(compare_buffer, "compare_buffer");
function compare_iterator(left, right) {
  while (true) {
    const left_next = left.next();
    const right_next = right.next();
    if (left_next.done !== right_next.done)
      return false;
    if (left_next.done)
      break;
    if (!$mol_compare_deep(left_next.value, right_next.value))
      return false;
  }
  return true;
}
__name(compare_iterator, "compare_iterator");
function compare_set(left, right) {
  if (left.size !== right.size)
    return false;
  return compare_iterator(left.values(), right.values());
}
__name(compare_set, "compare_set");
function compare_map(left, right) {
  if (left.size !== right.size)
    return false;
  return compare_iterator(left.keys(), right.keys()) && compare_iterator(left.values(), right.values());
}
__name(compare_map, "compare_map");
function compare_pojo(left, right) {
  const left_keys = Object.getOwnPropertyNames(left);
  const right_keys = Object.getOwnPropertyNames(right);
  if (!compare_array(left_keys, right_keys))
    return false;
  for (let key of left_keys) {
    if (!$mol_compare_deep(left[key], right[key]))
      return false;
  }
  const left_syms = Object.getOwnPropertySymbols(left);
  const right_syms = Object.getOwnPropertySymbols(right);
  if (!compare_array(left_syms, right_syms))
    return false;
  for (let key of left_syms) {
    if (!$mol_compare_deep(left[key], right[key]))
      return false;
  }
  return true;
}
__name(compare_pojo, "compare_pojo");
function compare_primitive(left, right) {
  return Object.is(
    left[Symbol.toPrimitive]("default"),
    right[Symbol.toPrimitive]("default")
  );
}
__name(compare_primitive, "compare_primitive");
$.$mol_promise_like = $mol_promise_like;
$.$mol_fail_hidden = $mol_fail_hidden;
const catched = /* @__PURE__ */ new WeakMap();
function $mol_fail_catch(error) {
  if (typeof error !== "object")
    return false;
  if ($mol_promise_like(error))
    $mol_fail_hidden(error);
  if (catched.get(error))
    return false;
  catched.set(error, true);
  return true;
}
__name($mol_fail_catch, "$mol_fail_catch");
$.$mol_promise_like = $mol_promise_like;
$.$mol_fail_catch = $mol_fail_catch;
function $mol_fail_log(error) {
  if ($mol_promise_like(error))
    return false;
  if (!$mol_fail_catch(error))
    return false;
  console.error(error);
  return true;
}
__name($mol_fail_log, "$mol_fail_log");
let $mol_log3_come;
let $mol_log3_done;
let $mol_log3_fail;
let $mol_log3_warn;
let $mol_log3_rise;
let $mol_log3_area;
let $mol_log3_stack = [];
$.$mol_log3_stack = $mol_log3_stack;
$.$mol_log3_come = $mol_log3_come;
$.$mol_log3_done = $mol_log3_done;
$.$mol_log3_fail = $mol_log3_fail;
$.$mol_log3_warn = $mol_log3_warn;
$.$mol_log3_rise = $mol_log3_rise;
$.$mol_log3_area = $mol_log3_area;
function $mol_log3_web_make(level, color) {
  return /* @__PURE__ */ __name(function $mol_log3_logger(event) {
    const pending = this.$mol_log3_stack.pop();
    if (pending)
      pending();
    let tpl = "%c";
    const chunks = Object.values(event);
    for (let i = 0; i < chunks.length; ++i) {
      tpl += typeof chunks[i] === "string" ? " ▫ %s" : " ▫ %o";
    }
    const style = `color:${color};font-weight:bolder`;
    this.console[level](tpl, style, ...chunks);
    const self2 = this;
    return () => self2.console.groupEnd();
  }, "$mol_log3_logger");
}
__name($mol_log3_web_make, "$mol_log3_web_make");
$.$mol_log3_come = $mol_log3_web_make("info", "royalblue");
$.$mol_log3_done = $mol_log3_web_make("info", "forestgreen");
$.$mol_log3_fail = $mol_log3_web_make("error", "orangered");
$.$mol_log3_warn = $mol_log3_web_make("warn", "goldenrod");
$.$mol_log3_rise = $mol_log3_web_make("log", "magenta");
$.$mol_log3_area = $mol_log3_web_make("group", "cyan");
$.$mol_wire_fiber = $mol_wire_fiber;
$.$mol_wire_auto = $mol_wire_auto;
$.$mol_compare_deep = $mol_compare_deep;
$.$mol_log3_warn = $mol_log3_warn;
$.$mol_promise_like = $mol_promise_like;
$.$mol_wire_cursor = $mol_wire_cursor;
const _$mol_wire_task = class _$mol_wire_task extends $mol_wire_fiber {
  static getter(task) {
    return /* @__PURE__ */ __name(function $mol_wire_task_get(host, args) {
      const sub2 = $mol_wire_auto();
      const existen = sub2 == null ? void 0 : sub2.track_next();
      reuse:
        if (existen) {
          if (!existen.temp)
            break reuse;
          if (existen.host !== host)
            break reuse;
          if (existen.task !== task)
            break reuse;
          if (!$mol_compare_deep(existen.args, args))
            break reuse;
          return existen;
        }
      const next = new _$mol_wire_task(`${(host == null ? void 0 : host[Symbol.toStringTag]) ?? host}.${task.name}<#>`, task, host, args);
      if (existen == null ? void 0 : existen.temp) {
        $$.$mol_log3_warn({
          place: "$mol_wire_task",
          message: `Non idempotency`,
          existen,
          next,
          hint: "Ignore it"
        });
      }
      return next;
    }, "$mol_wire_task_get");
  }
  get temp() {
    return true;
  }
  complete() {
    if ($mol_promise_like(this.cache))
      return;
    this.destructor();
  }
  put(next) {
    const prev = this.cache;
    this.cache = next;
    if ($mol_promise_like(next)) {
      this.cursor = $mol_wire_cursor.fresh;
      if (next !== prev)
        this.emit();
      return next;
    }
    this.cursor = $mol_wire_cursor.final;
    if (this.sub_empty)
      this.destructor();
    else if (next !== prev)
      this.emit();
    return next;
  }
};
__name(_$mol_wire_task, "$mol_wire_task");
let $mol_wire_task = _$mol_wire_task;
$.$mol_wire_task = $mol_wire_task;
function $mol_wire_method(host, field, descr) {
  if (!descr)
    descr = Reflect.getOwnPropertyDescriptor(host, field);
  const orig = (descr == null ? void 0 : descr.value) ?? host[field];
  const sup = Reflect.getPrototypeOf(host);
  if (typeof sup[field] === "function") {
    Object.defineProperty(orig, "name", { value: sup[field].name });
  }
  const temp = $mol_wire_task.getter(orig);
  const value = /* @__PURE__ */ __name(function(...args) {
    const fiber = temp(this ?? null, args);
    return fiber.sync();
  }, "value");
  Object.defineProperty(value, "name", { value: orig.name + " " });
  Object.assign(value, { orig });
  const descr2 = { ...descr, value };
  Reflect.defineProperty(host, field, descr2);
  return descr2;
}
__name($mol_wire_method, "$mol_wire_method");
$.$mol_wire_fiber = $mol_wire_fiber;
$.$mol_func_name = $mol_func_name;
$.$mol_key = $mol_key;
$.$mol_after_frame = $mol_after_frame;
$.$mol_wire_cursor = $mol_wire_cursor;
$.$mol_wire_auto = $mol_wire_auto;
$.$mol_owning_check = $mol_owning_check;
$.$mol_owning_catch = $mol_owning_catch;
$.$mol_compare_deep = $mol_compare_deep;
$.$mol_fail_log = $mol_fail_log;
$.$mol_promise_like = $mol_promise_like;
$.$mol_wire_method = $mol_wire_method;
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
}, "__decorateClass$4");
const _$mol_wire_atom = (_d = class extends $mol_wire_fiber {
  static solo(host, task) {
    var _a2;
    const field = task.name + "<>";
    const existen = (_a2 = Object.getOwnPropertyDescriptor(host ?? task, field)) == null ? void 0 : _a2.value;
    if (existen)
      return existen;
    const prefix = (host == null ? void 0 : host[Symbol.toStringTag]) ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
    const key = `${prefix}.${field}`;
    const fiber = new _d(key, task, host, []);
    (host ?? task)[field] = fiber;
    return fiber;
  }
  static plex(host, task, key) {
    var _a2;
    const field = task.name + "<>";
    let dict = (_a2 = Object.getOwnPropertyDescriptor(host ?? task, field)) == null ? void 0 : _a2.value;
    const prefix = (host == null ? void 0 : host[Symbol.toStringTag]) ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
    const key_str = $mol_key(key);
    if (dict) {
      const existen = dict.get(key_str);
      if (existen)
        return existen;
    } else {
      dict = (host ?? task)[field] = /* @__PURE__ */ new Map();
    }
    const id = `${prefix}.${task.name}<${key_str.replace(/^"|"$/g, "'")}>`;
    const fiber = new _d(id, task, host, [key]);
    dict.set(key_str, fiber);
    return fiber;
  }
  static watch() {
    _d.watcher = new $mol_after_frame(_d.watch);
    for (const atom of _d.watching) {
      if (atom.cursor === $mol_wire_cursor.final) {
        _d.watching.delete(atom);
      } else {
        atom.cursor = $mol_wire_cursor.stale;
        atom.fresh();
      }
    }
  }
  watch() {
    if (!_d.watcher) {
      _d.watcher = new $mol_after_frame(_d.watch);
    }
    _d.watching.add(this);
  }
  resync(args) {
    return this.put(this.task.call(this.host, ...args));
  }
  once() {
    return this.sync();
  }
  channel() {
    return Object.assign((next) => {
      var _a2;
      if (next !== void 0)
        return this.resync([...this.args, next]);
      if (!$mol_wire_fiber.warm)
        return this.result();
      if ((_a2 = $mol_wire_auto()) == null ? void 0 : _a2.temp) {
        return this.once();
      } else {
        return this.sync();
      }
    }, { atom: this });
  }
  destructor() {
    super.destructor();
    const prev = this.cache;
    if ($mol_owning_check(this, prev)) {
      prev.destructor();
    }
    if (this.pub_from === 0) {
      (this.host ?? this.task)[this.field()] = null;
    } else {
      (this.host ?? this.task)[this.field()].delete($mol_key(this.args[0]));
    }
  }
  put(next) {
    const prev = this.cache;
    update:
      if (next !== prev) {
        try {
          if ($mol_compare_deep(prev, next))
            break update;
        } catch (error) {
          $mol_fail_log(error);
        }
        if ($mol_owning_check(this, prev)) {
          prev.destructor();
        }
        if ($mol_owning_catch(this, next)) {
          try {
            next[Symbol.toStringTag] = this[Symbol.toStringTag];
          } catch {
            Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
          }
        }
        if (!this.sub_empty)
          this.emit();
      }
    this.cache = next;
    this.cursor = $mol_wire_cursor.fresh;
    if ($mol_promise_like(next))
      return next;
    this.complete_pubs();
    return next;
  }
}, __name(_d, "_$mol_wire_atom2"), __publicField(_d, "watching", /* @__PURE__ */ new Set()), __publicField(_d, "watcher", null), _d);
__decorateClass$4([
  $mol_wire_method
], _$mol_wire_atom.prototype, "resync", 1);
__decorateClass$4([
  $mol_wire_method
], _$mol_wire_atom.prototype, "once", 1);
let $mol_wire_atom = _$mol_wire_atom;
$.$mol_wire_atom = $mol_wire_atom;
$.$mol_wire_fiber = $mol_wire_fiber;
$.$mol_wire_auto = $mol_wire_auto;
function $mol_wire_solo(host, field, descr) {
  if (!descr)
    descr = Reflect.getOwnPropertyDescriptor(host, field);
  const orig = (descr == null ? void 0 : descr.value) ?? host[field];
  const sup = Reflect.getPrototypeOf(host);
  if (typeof sup[field] === "function") {
    Object.defineProperty(orig, "name", { value: sup[field].name });
  }
  const descr2 = {
    ...descr,
    value: function(...args) {
      var _a2;
      let atom = $mol_wire_atom.solo(this, orig);
      if (args.length === 0 || args[0] === void 0) {
        if (!$mol_wire_fiber.warm)
          return atom.result();
        if ((_a2 = $mol_wire_auto()) == null ? void 0 : _a2.temp) {
          return atom.once();
        } else {
          return atom.sync();
        }
      }
      return atom.resync(args);
    }
  };
  Reflect.defineProperty(descr2.value, "name", { value: orig.name + " " });
  Reflect.defineProperty(descr2.value, "length", { value: orig.length });
  Object.assign(descr2.value, { orig });
  Reflect.defineProperty(host, field, descr2);
  return descr2;
}
__name($mol_wire_solo, "$mol_wire_solo");
$.$mol_wire_atom = $mol_wire_atom;
$.$mol_wire_fiber = $mol_wire_fiber;
$.$mol_wire_auto = $mol_wire_auto;
function $mol_wire_plex(host, field, descr) {
  if (!descr)
    descr = Reflect.getOwnPropertyDescriptor(host, field);
  const orig = (descr == null ? void 0 : descr.value) ?? host[field];
  const sup = Reflect.getPrototypeOf(host);
  if (typeof sup[field] === "function") {
    Object.defineProperty(orig, "name", { value: sup[field].name });
  }
  const descr2 = {
    ...descr,
    value: function(...args) {
      var _a2;
      let atom = $mol_wire_atom.plex(this, orig, args[0]);
      if (args.length === 1 || args[1] === void 0) {
        if (!$mol_wire_fiber.warm)
          return atom.result();
        if ((_a2 = $mol_wire_auto()) == null ? void 0 : _a2.temp) {
          return atom.once();
        } else {
          return atom.sync();
        }
      }
      return atom.resync(args);
    }
  };
  Reflect.defineProperty(descr2.value, "name", { value: orig.name + " " });
  Reflect.defineProperty(descr2.value, "length", { value: orig.length });
  Object.assign(descr2.value, { orig });
  Reflect.defineProperty(host, field, descr2);
  return descr2;
}
__name($mol_wire_plex, "$mol_wire_plex");
$.$mol_wire_solo = $mol_wire_solo;
$.$mol_wire_plex = $mol_wire_plex;
let $mol_mem = $mol_wire_solo;
let $mol_mem_key = $mol_wire_plex;
$.$mol_object = $mol_object;
$.$mol_mem = $mol_mem;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
}, "__decorateClass$3");
const _$mol_window = class _$mol_window extends $mol_object {
  static size() {
    this.resizes();
    return {
      width: self.innerWidth,
      height: self.innerHeight
    };
  }
  static resizes(next) {
    return next;
  }
};
__name(_$mol_window, "$mol_window");
let $mol_window = _$mol_window;
__decorateClass$3([
  $mol_mem
], $mol_window, "size", 1);
__decorateClass$3([
  $mol_mem
], $mol_window, "resizes", 1);
self.addEventListener("resize", (event) => $mol_window.resizes(event));
var $mol_dom_context = window;
$.$mol_dom_context = $mol_dom_context;
$.$mol_dom_context = self;
$.$mol_object2 = $mol_object2;
const _$mol_after_tick = class _$mol_after_tick extends $mol_object2 {
  constructor(task) {
    super();
    __publicField(this, "promise");
    __publicField(this, "cancelled", false);
    this.task = task;
    this.promise = Promise.resolve().then(() => {
      if (this.cancelled)
        return;
      task();
    });
  }
  destructor() {
    this.cancelled = true;
  }
};
__name(_$mol_after_tick, "$mol_after_tick");
let $mol_after_tick = _$mol_after_tick;
$.$mol_object = $mol_object;
$.$mol_dom_context = $mol_dom_context;
$.$mol_after_tick = $mol_after_tick;
$.$mol_mem = $mol_mem;
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
}, "__decorateClass$2");
const _$mol_view_selection = class _$mol_view_selection extends $mol_object {
  static focused(next, notify) {
    const parents = [];
    let element = (next == null ? void 0 : next[0]) ?? $mol_dom_context.document.activeElement;
    while (element) {
      parents.push(element);
      element = element.parentNode;
    }
    if (!next || notify)
      return parents;
    new $mol_after_tick(() => {
      const element2 = this.focused()[0];
      if (element2)
        element2.focus();
      else
        $mol_dom_context.blur();
    });
    return parents;
  }
};
__name(_$mol_view_selection, "$mol_view_selection");
let $mol_view_selection = _$mol_view_selection;
__decorateClass$2([
  $mol_mem
], $mol_view_selection, "focused", 1);
function $mol_maybe(value) {
  return value == null ? [] : [value];
}
__name($mol_maybe, "$mol_maybe");
$.$mol_dom_context = $mol_dom_context;
$.$mol_view_selection = $mol_view_selection;
$.$mol_maybe = $mol_maybe;
if ($mol_dom_context.document) {
  $mol_dom_context.document.documentElement.addEventListener(
    "focus",
    (event) => {
      $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), "notify");
    },
    true
  );
}
function $mol_dom_qname(name) {
  return name.replace(/\W/g, "").replace(/^(?=\d+)/, "_");
}
__name($mol_dom_qname, "$mol_dom_qname");
$.$mol_wire_fiber = $mol_wire_fiber;
function $mol_wire_probe(task, def) {
  const warm = $mol_wire_fiber.warm;
  try {
    $mol_wire_fiber.warm = false;
    const res = task();
    if (res === void 0)
      return def;
    return res;
  } finally {
    $mol_wire_fiber.warm = warm;
  }
}
__name($mol_wire_probe, "$mol_wire_probe");
$.$mol_wire_auto = $mol_wire_auto;
$.$mol_wire_atom = $mol_wire_atom;
$.$mol_fail = $mol_fail;
function $mol_wire_watch() {
  const atom = $mol_wire_auto();
  if (atom instanceof $mol_wire_atom) {
    atom.watch();
  } else {
    $mol_fail(new Error("Atom is required for watching"));
  }
}
__name($mol_wire_watch, "$mol_wire_watch");
$.$mol_dev_format_head = $mol_dev_format_head;
$.$mol_dev_format_auto = $mol_dev_format_auto;
$.$mol_dev_format_span = $mol_dev_format_span;
function $mol_const(value) {
  const getter = /* @__PURE__ */ __name(() => value, "getter");
  getter["()"] = value;
  getter[Symbol.toStringTag] = value;
  getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, "()=> ", $mol_dev_format_auto(value));
  return getter;
}
__name($mol_const, "$mol_const");
$.$mol_wire_auto = $mol_wire_auto;
$.$mol_wire_pub_sub = $mol_wire_pub_sub;
function $mol_wire_solid() {
  let current = $mol_wire_auto();
  if (current.temp)
    current = current.host;
  if (current.reap !== nothing) {
    current == null ? void 0 : current.sub_on(sub, sub.data.length);
  }
  current.reap = nothing;
}
__name($mol_wire_solid, "$mol_wire_solid");
const nothing = /* @__PURE__ */ __name(() => {
}, "nothing");
const sub = new $mol_wire_pub_sub();
function $mol_dom_render_attributes(el, attrs) {
  for (let name in attrs) {
    let val = attrs[name];
    if (val === void 0) {
      continue;
    }
    if (val === null || val === false) {
      if (!el.hasAttribute(name))
        continue;
      el.removeAttribute(name);
    } else {
      const str = String(val);
      if (el.getAttribute(name) === str)
        continue;
      el.setAttribute(name, str);
    }
  }
}
__name($mol_dom_render_attributes, "$mol_dom_render_attributes");
function $mol_dom_render_events(el, events, passive = false) {
  for (let name in events) {
    el.addEventListener(name, events[name], { passive });
  }
}
__name($mol_dom_render_events, "$mol_dom_render_events");
function $mol_dom_render_styles(el, styles) {
  for (let name in styles) {
    let val = styles[name];
    const style = el.style;
    const kebab = /* @__PURE__ */ __name((name2) => name2.replace(/[A-Z]/g, (letter) => "-" + letter.toLowerCase()), "kebab");
    if (typeof val === "number") {
      style.setProperty(kebab(name), `${val}px`);
    } else {
      style.setProperty(kebab(name), val);
    }
  }
}
__name($mol_dom_render_styles, "$mol_dom_render_styles");
$.$mol_dom_context = $mol_dom_context;
function $mol_dom_render_children(el, childNodes) {
  const node_set = new Set(childNodes);
  let nextNode = el.firstChild;
  for (let view of childNodes) {
    if (view == null)
      continue;
    if (view instanceof $mol_dom_context.Node) {
      while (true) {
        if (!nextNode) {
          el.appendChild(view);
          break;
        }
        if (nextNode == view) {
          nextNode = nextNode.nextSibling;
          break;
        } else {
          if (node_set.has(nextNode)) {
            el.insertBefore(view, nextNode);
            break;
          } else {
            const nn = nextNode.nextSibling;
            el.removeChild(nextNode);
            nextNode = nn;
          }
        }
      }
    } else {
      if (nextNode && nextNode.nodeName === "#text") {
        const str = String(view);
        if (nextNode.nodeValue !== str)
          nextNode.nodeValue = str;
        nextNode = nextNode.nextSibling;
      } else {
        const textNode = $mol_dom_context.document.createTextNode(String(view));
        el.insertBefore(textNode, nextNode);
      }
    }
  }
  while (nextNode) {
    const currNode = nextNode;
    nextNode = currNode.nextSibling;
    el.removeChild(currNode);
  }
}
__name($mol_dom_render_children, "$mol_dom_render_children");
function $mol_dom_render_fields(el, fields) {
  for (let key in fields) {
    const val = fields[key];
    if (val === void 0)
      continue;
    el[key] = val;
  }
}
__name($mol_dom_render_fields, "$mol_dom_render_fields");
$.$mol_wire_task = $mol_wire_task;
function $mol_wire_async(obj) {
  let fiber;
  const temp = $mol_wire_task.getter(obj);
  return new Proxy(obj, {
    get(obj2, field) {
      const val = obj2[field];
      if (typeof val !== "function")
        return val;
      let fiber2;
      const temp2 = $mol_wire_task.getter(val);
      return /* @__PURE__ */ __name(function $mol_wire_async2(...args) {
        fiber2 == null ? void 0 : fiber2.destructor();
        fiber2 = temp2(obj2, args);
        return fiber2.async();
      }, "$mol_wire_async2");
    },
    apply(obj2, self2, args) {
      fiber == null ? void 0 : fiber.destructor();
      fiber = temp(self2, args);
      return fiber.async();
    }
  });
}
__name($mol_wire_async, "$mol_wire_async");
$.$mol_object2 = $mol_object2;
const _$mol_wrapper = class _$mol_wrapper extends $mol_object2 {
  static run(task) {
    return this.func(task)();
  }
  static func(func) {
    return this.wrap(func);
  }
  static get class() {
    return (Class) => {
      const construct = /* @__PURE__ */ __name((target, args) => new Class(...args), "construct");
      const handler = {
        construct: this.func(construct)
      };
      handler[Symbol.toStringTag] = Class.name + "#";
      return new Proxy(Class, handler);
    };
  }
  static get method() {
    return (obj, name, descr) => {
      descr.value = this.func(descr.value);
      return descr;
    };
  }
  static get field() {
    return (obj, name, descr) => {
      descr.get = descr.set = this.func(descr.get);
      return descr;
    };
  }
};
__name(_$mol_wrapper, "$mol_wrapper");
__publicField(_$mol_wrapper, "wrap");
let $mol_wrapper = _$mol_wrapper;
$.$mol_wrapper = $mol_wrapper;
const _$mol_memo = class _$mol_memo extends $mol_wrapper {
  static wrap(task) {
    const store = /* @__PURE__ */ new WeakMap();
    return function(next) {
      if (next === void 0 && store.has(this))
        return store.get(this);
      const val = task.call(this, next) ?? next;
      store.set(this, val);
      return val;
    };
  }
};
__name(_$mol_memo, "$mol_memo");
let $mol_memo = _$mol_memo;
$.$mol_window = $mol_window;
$.$mol_object = $mol_object;
$.$mol_fail_log = $mol_fail_log;
$.$mol_dom_context = $mol_dom_context;
$.$mol_view_selection = $mol_view_selection;
$.$mol_dom_qname = $mol_dom_qname;
$.$mol_wire_probe = $mol_wire_probe;
$.$mol_wire_watch = $mol_wire_watch;
$.$mol_const = $mol_const;
$.$mol_wire_solid = $mol_wire_solid;
$.$mol_dom_render_attributes = $mol_dom_render_attributes;
$.$mol_dom_render_events = $mol_dom_render_events;
$.$mol_promise_like = $mol_promise_like;
$.$mol_dom_render_styles = $mol_dom_render_styles;
$.$mol_dom_render_children = $mol_dom_render_children;
$.$mol_dom_render_fields = $mol_dom_render_fields;
$.$mol_func_name = $mol_func_name;
$.$mol_owning_get = $mol_owning_get;
$.$mol_wire_async = $mol_wire_async;
$.$mol_dev_format_head = $mol_dev_format_head;
$.$mol_dev_format_native = $mol_dev_format_native;
$.$mol_dev_format_auto = $mol_dev_format_auto;
$.$mol_dev_format_span = $mol_dev_format_span;
$.$mol_dev_format_shade = $mol_dev_format_shade;
$.$mol_fail_hidden = $mol_fail_hidden;
$.$mol_after_frame = $mol_after_frame;
$.$mol_mem = $mol_mem;
$.$mol_mem_key = $mol_mem_key;
$.$mol_memo = $mol_memo;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
}, "__decorateClass$1");
const error_showed = /* @__PURE__ */ new WeakMap();
const _$mol_view = (_e = class extends $mol_object {
  static Root(id) {
    return new this();
  }
  autorun() {
    try {
      this.dom_tree();
      document.title = this.title();
    } catch (error) {
      $mol_fail_log(error);
    }
  }
  static autobind() {
    const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
    for (let i = nodes.length - 1; i >= 0; --i) {
      const name = nodes.item(i).getAttribute("mol_view_root");
      const View = $[name];
      if (!View) {
        console.error(`Can not attach view. Class not found: ${name}`);
        continue;
      }
      const view = View.Root(i);
      view.dom_node(nodes.item(i));
      view.autorun();
    }
  }
  title() {
    var _a2;
    return ((_a2 = this.toString().match(/.*\.(\w+)/)) == null ? void 0 : _a2[1]) ?? this.toString();
  }
  focused(next) {
    let node = this.dom_node();
    const value = $mol_view_selection.focused(next === void 0 ? void 0 : next ? [node] : []);
    return value.indexOf(node) !== -1;
  }
  state_key(suffix = "") {
    return this.$.$mol_view_state_key(suffix);
  }
  dom_name() {
    return $mol_dom_qname(this.constructor.toString()) || "div";
  }
  /// NameSpace of element that created when element not found in DOM
  dom_name_space() {
    return "http://www.w3.org/1999/xhtml";
  }
  /// Raw child views
  sub() {
    return [];
  }
  /// Visible sub views with defined ambient context
  /// Render all by default
  sub_visible() {
    return this.sub();
  }
  minimal_width() {
    let min = 0;
    try {
      const sub2 = this.sub();
      if (!sub2)
        return 0;
      sub2.forEach((view) => {
        if (view instanceof _e) {
          min = Math.max(min, view.minimal_width());
        }
      });
    } catch (error) {
      $mol_fail_log(error);
      return 24;
    }
    return min;
  }
  maximal_width() {
    return this.minimal_width();
  }
  minimal_height() {
    let min = 0;
    try {
      for (const view of this.sub() ?? []) {
        if (view instanceof _e) {
          min = Math.max(min, view.minimal_height());
        }
      }
    } catch (error) {
      $mol_fail_log(error);
      return 24;
    }
    return min;
  }
  view_rect() {
    if ($mol_wire_probe(() => this.view_rect()) === void 0) {
      $mol_wire_watch();
      return null;
    } else {
      const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
      return { width, height, left, right, top, bottom };
    }
  }
  dom_id() {
    return this.toString().replace(/</g, "(").replace(/>/g, ")").replaceAll(/"/g, "'");
  }
  dom_node_external(next) {
    const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
    const id = this.dom_id();
    node.setAttribute("id", id);
    node.toString = $mol_const("<#" + id + ">");
    return node;
  }
  dom_node(next) {
    $mol_wire_solid();
    const node = this.dom_node_external(next);
    $mol_dom_render_attributes(node, this.attr_static());
    const events = this.event_async();
    $mol_dom_render_events(node, events);
    return node;
  }
  dom_final() {
    this.render();
    const sub2 = this.sub_visible();
    if (!sub2)
      return;
    for (const el of sub2) {
      if (el && typeof el === "object" && "dom_final" in el) {
        el["dom_final"]();
      }
    }
    return this.dom_node();
  }
  dom_tree(next) {
    const node = this.dom_node(next);
    render:
      try {
        $mol_dom_render_attributes(node, { mol_view_error: null });
        try {
          this.render();
        } finally {
          for (let plugin of this.plugins()) {
            plugin.dom_tree();
          }
        }
      } catch (error) {
        $mol_fail_log(error);
        const mol_view_error = $mol_promise_like(error) ? "Promise" : error.name || error.constructor.name;
        $mol_dom_render_attributes(node, { mol_view_error });
        if ($mol_promise_like(error))
          break render;
        if ((error_showed.get(error) ?? this) !== this)
          break render;
        try {
          const message = error.message || error;
          node.innerText = message.replace(/^|$/mg, "  ");
        } catch {
        }
        error_showed.set(error, this);
      }
    try {
      this.auto();
    } catch (error) {
      $mol_fail_log(error);
    }
    return node;
  }
  dom_node_actual() {
    const node = this.dom_node();
    $mol_dom_render_styles(node, this.style_size());
    const attr = this.attr();
    const style = this.style();
    $mol_dom_render_attributes(node, attr);
    $mol_dom_render_styles(node, style);
    return node;
  }
  auto() {
    return null;
  }
  render() {
    const node = this.dom_node_actual();
    const sub2 = this.sub_visible();
    if (!sub2)
      return;
    const nodes = sub2.map((child) => {
      if (child == null)
        return null;
      return child instanceof _e ? child.dom_node() : child instanceof $mol_dom_context.Node ? child : String(child);
    });
    $mol_dom_render_children(node, nodes);
    for (const el of sub2)
      if (el && typeof el === "object" && "dom_tree" in el)
        el["dom_tree"]();
    $mol_dom_render_fields(node, this.field());
  }
  static view_classes() {
    var _a2;
    const proto = this.prototype;
    let current = proto;
    const classes = [];
    while (current) {
      if (current.constructor.name !== ((_a2 = classes.at(-1)) == null ? void 0 : _a2.name)) {
        classes.push(current.constructor);
      }
      if (!(current instanceof _e))
        break;
      current = Object.getPrototypeOf(current);
    }
    return classes;
  }
  static view_names(suffix) {
    var _a2;
    let cache = (_a2 = Reflect.getOwnPropertyDescriptor(this, "_view_names")) == null ? void 0 : _a2.value;
    if (!cache)
      cache = this._view_names = /* @__PURE__ */ new Map();
    const cached = cache.get(suffix);
    if (cached)
      return cached;
    const names = [];
    const suffix2 = "_" + suffix[0].toLowerCase() + suffix.substring(1);
    for (const Class of this.view_classes()) {
      if (suffix in Class.prototype)
        names.push(this.$.$mol_func_name(Class) + suffix2);
      else
        break;
    }
    cache.set(suffix, names);
    return names;
  }
  view_names_owned() {
    const names = [];
    let owner = $mol_owning_get(this);
    if (!((owner == null ? void 0 : owner.host) instanceof _e))
      return names;
    const suffix = owner.task.name.trim();
    const suffix2 = "_" + suffix[0].toLowerCase() + suffix.substring(1);
    names.push(...owner.host.constructor.view_names(suffix));
    for (let prefix of owner.host.view_names_owned()) {
      names.push(prefix + suffix2);
    }
    return names;
  }
  view_names() {
    const names = /* @__PURE__ */ new Set();
    for (let name of this.view_names_owned())
      names.add(name);
    for (let Class of this.constructor.view_classes()) {
      const name = this.$.$mol_func_name(Class);
      if (name)
        names.add(name);
    }
    return names;
  }
  theme(next = null) {
    return next;
  }
  attr_static() {
    let attrs = {};
    for (let name of this.view_names())
      attrs[name.replace(/\$/g, "").replace(/^(?=\d)/, "_").toLowerCase()] = "";
    return attrs;
  }
  attr() {
    return {
      mol_theme: this.theme() ?? void 0
    };
  }
  style_size() {
    return {
      minHeight: this.minimal_height(),
      minWidth: this.minimal_width()
    };
  }
  style() {
    return {};
  }
  field() {
    return {};
  }
  event() {
    return {};
  }
  event_async() {
    return { ...$mol_wire_async(this.event()) };
  }
  plugins() {
    return [];
  }
  [$mol_dev_format_head]() {
    return $mol_dev_format_span(
      {},
      $mol_dev_format_native(this)
      // $mol_dev_format_shade( '/' ) ,
      // $mol_dev_format_auto( $mol_wire_cache( this ).sub().cache ) ,
    );
  }
  /** Deep search view by predicate. */
  *view_find(check, path = []) {
    if (check(this))
      return yield [...path, this];
    try {
      for (const item of this.sub()) {
        if (item instanceof _e) {
          yield* item.view_find(check, [...path, this]);
        }
      }
    } catch (error) {
      if ($mol_promise_like(error))
        $mol_fail_hidden(error);
      $mol_fail_log(error);
    }
  }
  /** Renders path of views to DOM. */
  force_render(path) {
    const kids = this.sub();
    const index = kids.findIndex((item) => {
      if (item instanceof _e) {
        return path.has(item);
      } else {
        return false;
      }
    });
    if (index >= 0) {
      kids[index].force_render(path);
    }
  }
  /** Renders view to DOM and scroll to it. */
  ensure_visible(view, align = "start") {
    const path = this.view_find((v) => v === view).next().value;
    this.force_render(new Set(path));
    try {
      this.dom_final();
    } catch (err) {
      $mol_fail_log(err);
    }
    view.dom_node().scrollIntoView({ block: align });
  }
  bring() {
    const win = this.$.$mol_dom_context;
    if (win.parent !== win.self && !win.document.hasFocus())
      return;
    new this.$.$mol_after_frame(() => {
      this.dom_node().scrollIntoView({ block: "start", inline: "nearest" });
      this.focused(true);
    });
  }
  destructor() {
    const node = $mol_wire_probe(() => this.dom_node());
    if (!node)
      return;
    const events = $mol_wire_probe(() => this.event_async());
    if (!events)
      return;
    for (let event_name in events) {
      node.removeEventListener(
        event_name,
        events[event_name]
      );
    }
  }
}, __name(_e, "_$mol_view2"), __publicField(_e, "watchers", /* @__PURE__ */ new Set()), __publicField(_e, "_view_names"), _e);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "autorun", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "title", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "focused", 1);
__decorateClass$1([
  $mol_memo.method
], _$mol_view.prototype, "dom_name", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "minimal_width", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "minimal_height", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "view_rect", 1);
__decorateClass$1([
  $mol_memo.method
], _$mol_view.prototype, "dom_id", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "dom_node", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "dom_final", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "dom_tree", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "dom_node_actual", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "render", 1);
__decorateClass$1([
  $mol_memo.method
], _$mol_view.prototype, "view_names_owned", 1);
__decorateClass$1([
  $mol_memo.method
], _$mol_view.prototype, "view_names", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "theme", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view.prototype, "event_async", 1);
__decorateClass$1([
  $mol_mem_key
], _$mol_view, "Root", 1);
__decorateClass$1([
  $mol_mem
], _$mol_view, "autobind", 1);
__decorateClass$1([
  $mol_memo.method
], _$mol_view, "view_classes", 1);
let $mol_view = _$mol_view;
$.$mol_dom_context = $mol_dom_context;
$.$mol_view = $mol_view;
(_f = $mol_dom_context.document) == null ? void 0 : _f.addEventListener(
  "DOMContentLoaded",
  () => $mol_view.autobind(),
  { once: true }
);
$.$mol_view = $mol_view;
const _$mol_viewtest = class _$mol_viewtest extends $.$mol_view {
  sub() {
    return ["TEXT TEXT 123 ыва в"];
  }
};
__name(_$mol_viewtest, "$mol_viewtest");
let $mol_viewtest = _$mol_viewtest;
$.$mol_viewtest = $mol_viewtest;
$.$mol_view = $mol_view;
$.$mol_mem = $mol_mem;
const _$mol_scroll = class _$mol_scroll extends $.$mol_view {
  scroll_top(next) {
    if (next !== void 0)
      return next;
    return 0;
  }
  scroll_left(next) {
    if (next !== void 0)
      return next;
    return 0;
  }
  field() {
    return { ...super.field(), "tabIndex": this.tabindex() };
  }
  event() {
    return { ...super.event(), "scroll": (next) => this.event_scroll(next) };
  }
  tabindex() {
    return -1;
  }
  event_scroll(next) {
    if (next !== void 0)
      return next;
    return null;
  }
};
__name(_$mol_scroll, "$mol_scroll");
let $mol_scroll = _$mol_scroll;
$.$mol_scroll = $mol_scroll;
$mol_mem($.$mol_scroll.prototype, "scroll_top");
$mol_mem($.$mol_scroll.prototype, "scroll_left");
$mol_mem($.$mol_scroll.prototype, "event_scroll");
$.$mol_object = $mol_object;
const _$mol_dom_listener = class _$mol_dom_listener extends $mol_object {
  constructor(_node, _event, _handler, _config = { passive: true }) {
    super();
    this._node = _node;
    this._event = _event;
    this._handler = _handler;
    this._config = _config;
    this._node.addEventListener(this._event, this._handler, this._config);
  }
  destructor() {
    this._node.removeEventListener(this._event, this._handler, this._config);
    super.destructor();
  }
};
__name(_$mol_dom_listener, "$mol_dom_listener");
let $mol_dom_listener = _$mol_dom_listener;
$.$mol_object = $mol_object;
$.$mol_dom_listener = $mol_dom_listener;
$.$mol_dom_context = $mol_dom_context;
$.$mol_mem = $mol_mem;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
}, "__decorateClass");
const _$mol_print = class _$mol_print extends $mol_object {
  static before() {
    return new $mol_dom_listener(this.$.$mol_dom_context, "beforeprint", () => {
      this.active(true);
    });
  }
  static after() {
    return new $mol_dom_listener(this.$.$mol_dom_context, "afterprint", () => {
      this.active(false);
    });
  }
  static active(next) {
    this.before();
    this.after();
    return next || false;
  }
};
__name(_$mol_print, "$mol_print");
let $mol_print = _$mol_print;
__decorateClass([
  $mol_mem
], $mol_print, "before", 1);
__decorateClass([
  $mol_mem
], $mol_print, "after", 1);
__decorateClass([
  $mol_mem
], $mol_print, "active", 1);
$.$mol_print = $mol_print;
$.$mol_mem = $mol_mem;
(function($2) {
  var __defProp3 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __decorateClass2 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp3(target, key, result);
    return result;
  }, "__decorateClass");
  const _$mol_scroll2 = class _$mol_scroll2 extends $2.$mol_scroll {
    scroll_top(next, cache) {
      const el = this.dom_node();
      if (next !== void 0 && !cache)
        el.scrollTop = next;
      return el.scrollTop;
    }
    scroll_left(next, cache) {
      const el = this.dom_node();
      if (next !== void 0 && !cache)
        el.scrollLeft = next;
      return el.scrollLeft;
    }
    event_scroll(next) {
      const el = this.dom_node();
      this.scroll_left(el.scrollLeft, "cache");
      this.scroll_top(el.scrollTop, "cache");
    }
    minimal_height() {
      return this.$.$mol_print.active() ? null : 0;
    }
    minimal_width() {
      return this.$.$mol_print.active() ? null : 0;
    }
  };
  __name(_$mol_scroll2, "$mol_scroll");
  let $mol_scroll2 = _$mol_scroll2;
  __decorateClass2([
    $mol_mem
  ], $mol_scroll2.prototype, "scroll_top", 1);
  __decorateClass2([
    $mol_mem
  ], $mol_scroll2.prototype, "scroll_left", 1);
  $2.$mol_scroll = $mol_scroll2;
})($ || ($ = {}));
$.$mol_view = $mol_view;
$.$mol_mem = $mol_mem;
const _$mol_page = class _$mol_page extends $.$mol_view {
  dom_name() {
    return "article";
  }
  field() {
    return { ...super.field(), "tabIndex": this.tabindex() };
  }
  sub() {
    return [
      this.Head(),
      this.Body(),
      this.Foot()
    ];
  }
  tabindex() {
    return -1;
  }
  Logo() {
    return null;
  }
  title_content() {
    return [this.Logo(), this.title()];
  }
  Title() {
    const obj = new this.$.$mol_view();
    obj.dom_name = () => "h1";
    obj.sub = () => this.title_content();
    return obj;
  }
  tools() {
    return [];
  }
  Tools() {
    const obj = new this.$.$mol_view();
    obj.sub = () => this.tools();
    return obj;
  }
  head() {
    return [this.Title(), this.Tools()];
  }
  Head() {
    const obj = new this.$.$mol_view();
    obj.minimal_height = () => 64;
    obj.dom_name = () => "header";
    obj.sub = () => this.head();
    return obj;
  }
  body_scroll_top(next) {
    return this.Body().scroll_top(next);
  }
  body() {
    return [];
  }
  Body_content() {
    const obj = new this.$.$mol_view();
    obj.sub = () => this.body();
    return obj;
  }
  body_content() {
    return [this.Body_content()];
  }
  Body() {
    const obj = new this.$.$mol_scroll();
    obj.sub = () => this.body_content();
    return obj;
  }
  foot() {
    return [];
  }
  Foot() {
    const obj = new this.$.$mol_view();
    obj.dom_name = () => "footer";
    obj.sub = () => this.foot();
    return obj;
  }
};
__name(_$mol_page, "$mol_page");
let $mol_page = _$mol_page;
$.$mol_page = $mol_page;
$mol_mem($.$mol_page.prototype, "Title");
$mol_mem($.$mol_page.prototype, "Tools");
$mol_mem($.$mol_page.prototype, "Head");
$mol_mem($.$mol_page.prototype, "Body_content");
$mol_mem($.$mol_page.prototype, "Body");
$mol_mem($.$mol_page.prototype, "Foot");
$.$mol_view = $mol_view;
const _$mol_speck = class _$mol_speck extends $.$mol_view {
  attr() {
    return { ...super.attr(), "mol_theme": this.theme() };
  }
  style() {
    return { ...super.style(), "minHeight": "1em" };
  }
  sub() {
    return [this.value()];
  }
  theme() {
    return "$mol_theme_accent";
  }
  value() {
    return null;
  }
};
__name(_$mol_speck, "$mol_speck");
let $mol_speck = _$mol_speck;
$.$mol_speck = $mol_speck;
$.$mol_view = $mol_view;
$.$mol_mem = $mol_mem;
const _$mol_button = class _$mol_button extends $.$mol_view {
  enabled() {
    return true;
  }
  click(next) {
    if (next !== void 0)
      return next;
    return null;
  }
  event_click(next) {
    if (next !== void 0)
      return next;
    return null;
  }
  event() {
    return {
      ...super.event(),
      "click": (next) => this.event_activate(next),
      "dblclick": (next) => this.clicks(next),
      "keydown": (next) => this.event_key_press(next)
    };
  }
  attr() {
    return {
      ...super.attr(),
      "disabled": this.disabled(),
      "role": "button",
      "tabindex": this.tab_index(),
      "title": this.hint_safe()
    };
  }
  sub() {
    return [this.title()];
  }
  Speck() {
    const obj = new this.$.$mol_speck();
    obj.value = () => this.error();
    return obj;
  }
  event_activate(next) {
    if (next !== void 0)
      return next;
    return null;
  }
  clicks(next) {
    if (next !== void 0)
      return next;
    return null;
  }
  event_key_press(next) {
    if (next !== void 0)
      return next;
    return null;
  }
  disabled() {
    return false;
  }
  tab_index() {
    return 0;
  }
  hint() {
    return "";
  }
  hint_safe() {
    return this.hint();
  }
  error() {
    return "";
  }
};
__name(_$mol_button, "$mol_button");
let $mol_button = _$mol_button;
$.$mol_button = $mol_button;
$mol_mem($.$mol_button.prototype, "click");
$mol_mem($.$mol_button.prototype, "event_click");
$mol_mem($.$mol_button.prototype, "Speck");
$mol_mem($.$mol_button.prototype, "event_activate");
$mol_mem($.$mol_button.prototype, "clicks");
$mol_mem($.$mol_button.prototype, "event_key_press");
$.$mol_fail_hidden = $mol_fail_hidden;
$.$mol_fail_log = $mol_fail_log;
$.$mol_mem = $mol_mem;
(function($2) {
  var __defProp3 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __decorateClass2 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp3(target, key, result);
    return result;
  }, "__decorateClass");
  const _$mol_button2 = class _$mol_button2 extends $2.$mol_button {
    status(next = [null]) {
      return next;
    }
    disabled() {
      return !this.enabled();
    }
    event_activate(next) {
      console.log("AT");
      if (!next)
        return;
      if (!this.enabled())
        return;
      try {
        this.event_click(next);
        this.click(next);
        this.status([null]);
      } catch (error) {
        Promise.resolve().then(() => this.status([error]));
        $mol_fail_hidden(error);
      }
    }
    event_key_press(event) {
      if (event.keyCode === $mol_keyboard_code.enter) {
        return this.event_activate(event);
      }
    }
    tab_index() {
      return this.enabled() ? super.tab_index() : -1;
    }
    error() {
      const [error] = this.status();
      if (!error)
        return "";
      if (error instanceof Promise) {
        return $mol_fail_hidden(error);
      }
      return String(error.message ?? error);
    }
    hint_safe() {
      try {
        return this.hint();
      } catch (error) {
        $mol_fail_log(error);
        return "";
      }
    }
    sub_visible() {
      return [
        ...this.error() ? [this.Speck()] : [],
        ...this.sub()
      ];
    }
  };
  __name(_$mol_button2, "$mol_button");
  let $mol_button2 = _$mol_button2;
  __decorateClass2([
    $mol_mem
  ], $mol_button2.prototype, "status", 1);
  $2.$mol_button = $mol_button2;
})($ || ($ = {}));
const _$mol_button_typed = class _$mol_button_typed extends $.$mol_button {
  minimal_height() {
    return 40;
  }
  minimal_width() {
    return 40;
  }
};
__name(_$mol_button_typed, "$mol_button_typed");
let $mol_button_typed = _$mol_button_typed;
$.$mol_button_typed = $mol_button_typed;
const _$mol_button_major = class _$mol_button_major extends $.$mol_button_typed {
  attr() {
    return { ...super.attr(), "mol_theme": "$mol_theme_accent" };
  }
};
__name(_$mol_button_major, "$mol_button_major");
let $mol_button_major = _$mol_button_major;
$.$mol_button_major = $mol_button_major;
$.$mol_mem = $mol_mem;
const _$mol_vite = class _$mol_vite extends $.$mol_page {
  body() {
    return [this.b()];
  }
  b() {
    const obj = new this.$.$mol_button_major();
    obj.title = () => "RUN";
    obj.click = (next) => this.click(next);
    return obj;
  }
};
__name(_$mol_vite, "$mol_vite");
let $mol_vite = _$mol_vite;
$.$mol_vite = $mol_vite;
$mol_mem($.$mol_vite.prototype, "b");
(function($2) {
  const _$mol_vite2 = class _$mol_vite2 extends $2.$mol_vite {
    constructor() {
      super(...arguments);
      __publicField(this, "counter", 1);
    }
    click() {
      console.log("CLICK");
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    auto() {
      setInterval(() => {
        this.text("TIME " + this.counter++);
      }, 1e3);
    }
  };
  __name(_$mol_vite2, "$mol_vite");
  let $mol_vite2 = _$mol_vite2;
  $2.$mol_vite = $mol_vite2;
})($ || ($ = {}));
console.log("not hot");
