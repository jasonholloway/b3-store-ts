/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.b3 || ($protobuf.roots.b3 = {});

$root.OffsetMap = (function() {

    /**
     * Properties of an OffsetMap.
     * @exports IOffsetMap
     * @interface IOffsetMap
     * @property {Object.<string,number>} [offsets] OffsetMap offsets
     */

    /**
     * Constructs a new OffsetMap.
     * @exports OffsetMap
     * @classdesc Represents an OffsetMap.
     * @constructor
     * @param {IOffsetMap=} [properties] Properties to set
     */
    function OffsetMap(properties) {
        this.offsets = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OffsetMap offsets.
     * @member {Object.<string,number>}offsets
     * @memberof OffsetMap
     * @instance
     */
    OffsetMap.prototype.offsets = $util.emptyObject;

    /**
     * Creates a new OffsetMap instance using the specified properties.
     * @function create
     * @memberof OffsetMap
     * @static
     * @param {IOffsetMap=} [properties] Properties to set
     * @returns {OffsetMap} OffsetMap instance
     */
    OffsetMap.create = function create(properties) {
        return new OffsetMap(properties);
    };

    /**
     * Encodes the specified OffsetMap message. Does not implicitly {@link OffsetMap.verify|verify} messages.
     * @function encode
     * @memberof OffsetMap
     * @static
     * @param {IOffsetMap} message OffsetMap message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OffsetMap.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.offsets != null && message.hasOwnProperty("offsets"))
            for (var keys = Object.keys(message.offsets), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.offsets[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified OffsetMap message, length delimited. Does not implicitly {@link OffsetMap.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OffsetMap
     * @static
     * @param {IOffsetMap} message OffsetMap message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OffsetMap.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OffsetMap message from the specified reader or buffer.
     * @function decode
     * @memberof OffsetMap
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OffsetMap} OffsetMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OffsetMap.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OffsetMap(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.offsets === $util.emptyObject)
                    message.offsets = {};
                key = reader.string();
                reader.pos++;
                message.offsets[key] = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OffsetMap message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OffsetMap
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OffsetMap} OffsetMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OffsetMap.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OffsetMap message.
     * @function verify
     * @memberof OffsetMap
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OffsetMap.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.offsets != null && message.hasOwnProperty("offsets")) {
            if (!$util.isObject(message.offsets))
                return "offsets: object expected";
            var key = Object.keys(message.offsets);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.offsets[key[i]]))
                    return "offsets: integer{k:string} expected";
        }
        return null;
    };

    /**
     * Creates an OffsetMap message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OffsetMap
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OffsetMap} OffsetMap
     */
    OffsetMap.fromObject = function fromObject(object) {
        if (object instanceof $root.OffsetMap)
            return object;
        var message = new $root.OffsetMap();
        if (object.offsets) {
            if (typeof object.offsets !== "object")
                throw TypeError(".OffsetMap.offsets: object expected");
            message.offsets = {};
            for (var keys = Object.keys(object.offsets), i = 0; i < keys.length; ++i)
                message.offsets[keys[i]] = object.offsets[keys[i]] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from an OffsetMap message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OffsetMap
     * @static
     * @param {OffsetMap} message OffsetMap
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OffsetMap.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.offsets = {};
        var keys2;
        if (message.offsets && (keys2 = Object.keys(message.offsets)).length) {
            object.offsets = {};
            for (var j = 0; j < keys2.length; ++j)
                object.offsets[keys2[j]] = message.offsets[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this OffsetMap to JSON.
     * @function toJSON
     * @memberof OffsetMap
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OffsetMap.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OffsetMap;
})();

$root.Payload = (function() {

    /**
     * Properties of a Payload.
     * @exports IPayload
     * @interface IPayload
     * @property {Array.<IEventList>} [eventLists] Payload eventLists
     */

    /**
     * Constructs a new Payload.
     * @exports Payload
     * @classdesc Represents a Payload.
     * @constructor
     * @param {IPayload=} [properties] Properties to set
     */
    function Payload(properties) {
        this.eventLists = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Payload eventLists.
     * @member {Array.<IEventList>}eventLists
     * @memberof Payload
     * @instance
     */
    Payload.prototype.eventLists = $util.emptyArray;

    /**
     * Creates a new Payload instance using the specified properties.
     * @function create
     * @memberof Payload
     * @static
     * @param {IPayload=} [properties] Properties to set
     * @returns {Payload} Payload instance
     */
    Payload.create = function create(properties) {
        return new Payload(properties);
    };

    /**
     * Encodes the specified Payload message. Does not implicitly {@link Payload.verify|verify} messages.
     * @function encode
     * @memberof Payload
     * @static
     * @param {IPayload} message Payload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Payload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.eventLists != null && message.eventLists.length)
            for (var i = 0; i < message.eventLists.length; ++i)
                $root.EventList.encode(message.eventLists[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Payload message, length delimited. Does not implicitly {@link Payload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Payload
     * @static
     * @param {IPayload} message Payload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Payload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Payload message from the specified reader or buffer.
     * @function decode
     * @memberof Payload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Payload} Payload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Payload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Payload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.eventLists && message.eventLists.length))
                    message.eventLists = [];
                message.eventLists.push($root.EventList.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Payload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Payload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Payload} Payload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Payload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Payload message.
     * @function verify
     * @memberof Payload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Payload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.eventLists != null && message.hasOwnProperty("eventLists")) {
            if (!Array.isArray(message.eventLists))
                return "eventLists: array expected";
            for (var i = 0; i < message.eventLists.length; ++i) {
                var error = $root.EventList.verify(message.eventLists[i]);
                if (error)
                    return "eventLists." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Payload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Payload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Payload} Payload
     */
    Payload.fromObject = function fromObject(object) {
        if (object instanceof $root.Payload)
            return object;
        var message = new $root.Payload();
        if (object.eventLists) {
            if (!Array.isArray(object.eventLists))
                throw TypeError(".Payload.eventLists: array expected");
            message.eventLists = [];
            for (var i = 0; i < object.eventLists.length; ++i) {
                if (typeof object.eventLists[i] !== "object")
                    throw TypeError(".Payload.eventLists: object expected");
                message.eventLists[i] = $root.EventList.fromObject(object.eventLists[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Payload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Payload
     * @static
     * @param {Payload} message Payload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Payload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.eventLists = [];
        if (message.eventLists && message.eventLists.length) {
            object.eventLists = [];
            for (var j = 0; j < message.eventLists.length; ++j)
                object.eventLists[j] = $root.EventList.toObject(message.eventLists[j], options);
        }
        return object;
    };

    /**
     * Converts this Payload to JSON.
     * @function toJSON
     * @memberof Payload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Payload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Payload;
})();

$root.Event = (function() {

    /**
     * Properties of an Event.
     * @exports IEvent
     * @interface IEvent
     * @property {number} [version] Event version
     * @property {IAddNote} [addNote] Event addNote
     */

    /**
     * Constructs a new Event.
     * @exports Event
     * @classdesc Represents an Event.
     * @constructor
     * @param {IEvent=} [properties] Properties to set
     */
    function Event(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Event version.
     * @member {number}version
     * @memberof Event
     * @instance
     */
    Event.prototype.version = 0;

    /**
     * Event addNote.
     * @member {(IAddNote|null|undefined)}addNote
     * @memberof Event
     * @instance
     */
    Event.prototype.addNote = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Event inner.
     * @member {string|undefined} inner
     * @memberof Event
     * @instance
     */
    Object.defineProperty(Event.prototype, "inner", {
        get: $util.oneOfGetter($oneOfFields = ["addNote"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Event instance using the specified properties.
     * @function create
     * @memberof Event
     * @static
     * @param {IEvent=} [properties] Properties to set
     * @returns {Event} Event instance
     */
    Event.create = function create(properties) {
        return new Event(properties);
    };

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @function encode
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.version != null && message.hasOwnProperty("version"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
        if (message.addNote != null && message.hasOwnProperty("addNote"))
            $root.AddNote.encode(message.addNote, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @function decode
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Event();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.version = reader.uint32();
                break;
            case 7:
                message.addNote = $root.AddNote.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Event message.
     * @function verify
     * @memberof Event
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Event.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        if (message.addNote != null && message.hasOwnProperty("addNote")) {
            properties.inner = 1;
            var error = $root.AddNote.verify(message.addNote);
            if (error)
                return "addNote." + error;
        }
        return null;
    };

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Event
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Event} Event
     */
    Event.fromObject = function fromObject(object) {
        if (object instanceof $root.Event)
            return object;
        var message = new $root.Event();
        if (object.version != null)
            message.version = object.version >>> 0;
        if (object.addNote != null) {
            if (typeof object.addNote !== "object")
                throw TypeError(".Event.addNote: object expected");
            message.addNote = $root.AddNote.fromObject(object.addNote);
        }
        return message;
    };

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Event
     * @static
     * @param {Event} message Event
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Event.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.version = 0;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.addNote != null && message.hasOwnProperty("addNote")) {
            object.addNote = $root.AddNote.toObject(message.addNote, options);
            if (options.oneofs)
                object.inner = "addNote";
        }
        return object;
    };

    /**
     * Converts this Event to JSON.
     * @function toJSON
     * @memberof Event
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Event.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Event;
})();

$root.EventList = (function() {

    /**
     * Properties of an EventList.
     * @exports IEventList
     * @interface IEventList
     * @property {string} [ref] EventList ref
     * @property {Array.<IEvent>} [events] EventList events
     */

    /**
     * Constructs a new EventList.
     * @exports EventList
     * @classdesc Represents an EventList.
     * @constructor
     * @param {IEventList=} [properties] Properties to set
     */
    function EventList(properties) {
        this.events = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventList ref.
     * @member {string}ref
     * @memberof EventList
     * @instance
     */
    EventList.prototype.ref = "";

    /**
     * EventList events.
     * @member {Array.<IEvent>}events
     * @memberof EventList
     * @instance
     */
    EventList.prototype.events = $util.emptyArray;

    /**
     * Creates a new EventList instance using the specified properties.
     * @function create
     * @memberof EventList
     * @static
     * @param {IEventList=} [properties] Properties to set
     * @returns {EventList} EventList instance
     */
    EventList.create = function create(properties) {
        return new EventList(properties);
    };

    /**
     * Encodes the specified EventList message. Does not implicitly {@link EventList.verify|verify} messages.
     * @function encode
     * @memberof EventList
     * @static
     * @param {IEventList} message EventList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ref != null && message.hasOwnProperty("ref"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ref);
        if (message.events != null && message.events.length)
            for (var i = 0; i < message.events.length; ++i)
                $root.Event.encode(message.events[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EventList message, length delimited. Does not implicitly {@link EventList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EventList
     * @static
     * @param {IEventList} message EventList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventList message from the specified reader or buffer.
     * @function decode
     * @memberof EventList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventList} EventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ref = reader.string();
                break;
            case 2:
                if (!(message.events && message.events.length))
                    message.events = [];
                message.events.push($root.Event.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EventList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EventList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EventList} EventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventList message.
     * @function verify
     * @memberof EventList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isString(message.ref))
                return "ref: string expected";
        if (message.events != null && message.hasOwnProperty("events")) {
            if (!Array.isArray(message.events))
                return "events: array expected";
            for (var i = 0; i < message.events.length; ++i) {
                var error = $root.Event.verify(message.events[i]);
                if (error)
                    return "events." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EventList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EventList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EventList} EventList
     */
    EventList.fromObject = function fromObject(object) {
        if (object instanceof $root.EventList)
            return object;
        var message = new $root.EventList();
        if (object.ref != null)
            message.ref = String(object.ref);
        if (object.events) {
            if (!Array.isArray(object.events))
                throw TypeError(".EventList.events: array expected");
            message.events = [];
            for (var i = 0; i < object.events.length; ++i) {
                if (typeof object.events[i] !== "object")
                    throw TypeError(".EventList.events: object expected");
                message.events[i] = $root.Event.fromObject(object.events[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an EventList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EventList
     * @static
     * @param {EventList} message EventList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.events = [];
        if (options.defaults)
            object.ref = "";
        if (message.ref != null && message.hasOwnProperty("ref"))
            object.ref = message.ref;
        if (message.events && message.events.length) {
            object.events = [];
            for (var j = 0; j < message.events.length; ++j)
                object.events[j] = $root.Event.toObject(message.events[j], options);
        }
        return object;
    };

    /**
     * Converts this EventList to JSON.
     * @function toJSON
     * @memberof EventList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EventList;
})();

$root.NoteList = (function() {

    /**
     * Properties of a NoteList.
     * @exports INoteList
     * @interface INoteList
     * @property {Array.<string>} [notes] NoteList notes
     */

    /**
     * Constructs a new NoteList.
     * @exports NoteList
     * @classdesc Represents a NoteList.
     * @constructor
     * @param {INoteList=} [properties] Properties to set
     */
    function NoteList(properties) {
        this.notes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NoteList notes.
     * @member {Array.<string>}notes
     * @memberof NoteList
     * @instance
     */
    NoteList.prototype.notes = $util.emptyArray;

    /**
     * Creates a new NoteList instance using the specified properties.
     * @function create
     * @memberof NoteList
     * @static
     * @param {INoteList=} [properties] Properties to set
     * @returns {NoteList} NoteList instance
     */
    NoteList.create = function create(properties) {
        return new NoteList(properties);
    };

    /**
     * Encodes the specified NoteList message. Does not implicitly {@link NoteList.verify|verify} messages.
     * @function encode
     * @memberof NoteList
     * @static
     * @param {INoteList} message NoteList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NoteList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.notes != null && message.notes.length)
            for (var i = 0; i < message.notes.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.notes[i]);
        return writer;
    };

    /**
     * Encodes the specified NoteList message, length delimited. Does not implicitly {@link NoteList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NoteList
     * @static
     * @param {INoteList} message NoteList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NoteList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NoteList message from the specified reader or buffer.
     * @function decode
     * @memberof NoteList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NoteList} NoteList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NoteList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NoteList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.notes && message.notes.length))
                    message.notes = [];
                message.notes.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NoteList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NoteList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NoteList} NoteList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NoteList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NoteList message.
     * @function verify
     * @memberof NoteList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NoteList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.notes != null && message.hasOwnProperty("notes")) {
            if (!Array.isArray(message.notes))
                return "notes: array expected";
            for (var i = 0; i < message.notes.length; ++i)
                if (!$util.isString(message.notes[i]))
                    return "notes: string[] expected";
        }
        return null;
    };

    /**
     * Creates a NoteList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NoteList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NoteList} NoteList
     */
    NoteList.fromObject = function fromObject(object) {
        if (object instanceof $root.NoteList)
            return object;
        var message = new $root.NoteList();
        if (object.notes) {
            if (!Array.isArray(object.notes))
                throw TypeError(".NoteList.notes: array expected");
            message.notes = [];
            for (var i = 0; i < object.notes.length; ++i)
                message.notes[i] = String(object.notes[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a NoteList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NoteList
     * @static
     * @param {NoteList} message NoteList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NoteList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.notes = [];
        if (message.notes && message.notes.length) {
            object.notes = [];
            for (var j = 0; j < message.notes.length; ++j)
                object.notes[j] = message.notes[j];
        }
        return object;
    };

    /**
     * Converts this NoteList to JSON.
     * @function toJSON
     * @memberof NoteList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NoteList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NoteList;
})();

$root.AddNote = (function() {

    /**
     * Properties of an AddNote.
     * @exports IAddNote
     * @interface IAddNote
     * @property {string} [note] AddNote note
     */

    /**
     * Constructs a new AddNote.
     * @exports AddNote
     * @classdesc Represents an AddNote.
     * @constructor
     * @param {IAddNote=} [properties] Properties to set
     */
    function AddNote(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AddNote note.
     * @member {string}note
     * @memberof AddNote
     * @instance
     */
    AddNote.prototype.note = "";

    /**
     * Creates a new AddNote instance using the specified properties.
     * @function create
     * @memberof AddNote
     * @static
     * @param {IAddNote=} [properties] Properties to set
     * @returns {AddNote} AddNote instance
     */
    AddNote.create = function create(properties) {
        return new AddNote(properties);
    };

    /**
     * Encodes the specified AddNote message. Does not implicitly {@link AddNote.verify|verify} messages.
     * @function encode
     * @memberof AddNote
     * @static
     * @param {IAddNote} message AddNote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddNote.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.note != null && message.hasOwnProperty("note"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.note);
        return writer;
    };

    /**
     * Encodes the specified AddNote message, length delimited. Does not implicitly {@link AddNote.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddNote
     * @static
     * @param {IAddNote} message AddNote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddNote.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AddNote message from the specified reader or buffer.
     * @function decode
     * @memberof AddNote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddNote} AddNote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddNote.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AddNote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.note = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AddNote message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddNote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddNote} AddNote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddNote.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AddNote message.
     * @function verify
     * @memberof AddNote
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AddNote.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.note != null && message.hasOwnProperty("note"))
            if (!$util.isString(message.note))
                return "note: string expected";
        return null;
    };

    /**
     * Creates an AddNote message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddNote
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddNote} AddNote
     */
    AddNote.fromObject = function fromObject(object) {
        if (object instanceof $root.AddNote)
            return object;
        var message = new $root.AddNote();
        if (object.note != null)
            message.note = String(object.note);
        return message;
    };

    /**
     * Creates a plain object from an AddNote message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddNote
     * @static
     * @param {AddNote} message AddNote
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AddNote.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.note = "";
        if (message.note != null && message.hasOwnProperty("note"))
            object.note = message.note;
        return object;
    };

    /**
     * Converts this AddNote to JSON.
     * @function toJSON
     * @memberof AddNote
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AddNote.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AddNote;
})();

$root.PutProduct = (function() {

    /**
     * Properties of a PutProduct.
     * @exports IPutProduct
     * @interface IPutProduct
     * @property {string} [productId] PutProduct productId
     * @property {string} [name] PutProduct name
     */

    /**
     * Constructs a new PutProduct.
     * @exports PutProduct
     * @classdesc Represents a PutProduct.
     * @constructor
     * @param {IPutProduct=} [properties] Properties to set
     */
    function PutProduct(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PutProduct productId.
     * @member {string}productId
     * @memberof PutProduct
     * @instance
     */
    PutProduct.prototype.productId = "";

    /**
     * PutProduct name.
     * @member {string}name
     * @memberof PutProduct
     * @instance
     */
    PutProduct.prototype.name = "";

    /**
     * Creates a new PutProduct instance using the specified properties.
     * @function create
     * @memberof PutProduct
     * @static
     * @param {IPutProduct=} [properties] Properties to set
     * @returns {PutProduct} PutProduct instance
     */
    PutProduct.create = function create(properties) {
        return new PutProduct(properties);
    };

    /**
     * Encodes the specified PutProduct message. Does not implicitly {@link PutProduct.verify|verify} messages.
     * @function encode
     * @memberof PutProduct
     * @static
     * @param {IPutProduct} message PutProduct message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutProduct.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.productId != null && message.hasOwnProperty("productId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.productId);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified PutProduct message, length delimited. Does not implicitly {@link PutProduct.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PutProduct
     * @static
     * @param {IPutProduct} message PutProduct message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutProduct.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PutProduct message from the specified reader or buffer.
     * @function decode
     * @memberof PutProduct
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PutProduct} PutProduct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutProduct.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PutProduct();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.productId = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PutProduct message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PutProduct
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PutProduct} PutProduct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutProduct.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PutProduct message.
     * @function verify
     * @memberof PutProduct
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PutProduct.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.productId != null && message.hasOwnProperty("productId"))
            if (!$util.isString(message.productId))
                return "productId: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a PutProduct message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PutProduct
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PutProduct} PutProduct
     */
    PutProduct.fromObject = function fromObject(object) {
        if (object instanceof $root.PutProduct)
            return object;
        var message = new $root.PutProduct();
        if (object.productId != null)
            message.productId = String(object.productId);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a PutProduct message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PutProduct
     * @static
     * @param {PutProduct} message PutProduct
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PutProduct.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.productId = "";
            object.name = "";
        }
        if (message.productId != null && message.hasOwnProperty("productId"))
            object.productId = message.productId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this PutProduct to JSON.
     * @function toJSON
     * @memberof PutProduct
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PutProduct.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PutProduct;
})();

$root.DeleteProduct = (function() {

    /**
     * Properties of a DeleteProduct.
     * @exports IDeleteProduct
     * @interface IDeleteProduct
     * @property {string} [productId] DeleteProduct productId
     */

    /**
     * Constructs a new DeleteProduct.
     * @exports DeleteProduct
     * @classdesc Represents a DeleteProduct.
     * @constructor
     * @param {IDeleteProduct=} [properties] Properties to set
     */
    function DeleteProduct(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeleteProduct productId.
     * @member {string}productId
     * @memberof DeleteProduct
     * @instance
     */
    DeleteProduct.prototype.productId = "";

    /**
     * Creates a new DeleteProduct instance using the specified properties.
     * @function create
     * @memberof DeleteProduct
     * @static
     * @param {IDeleteProduct=} [properties] Properties to set
     * @returns {DeleteProduct} DeleteProduct instance
     */
    DeleteProduct.create = function create(properties) {
        return new DeleteProduct(properties);
    };

    /**
     * Encodes the specified DeleteProduct message. Does not implicitly {@link DeleteProduct.verify|verify} messages.
     * @function encode
     * @memberof DeleteProduct
     * @static
     * @param {IDeleteProduct} message DeleteProduct message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteProduct.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.productId != null && message.hasOwnProperty("productId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.productId);
        return writer;
    };

    /**
     * Encodes the specified DeleteProduct message, length delimited. Does not implicitly {@link DeleteProduct.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeleteProduct
     * @static
     * @param {IDeleteProduct} message DeleteProduct message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteProduct.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeleteProduct message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteProduct
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeleteProduct} DeleteProduct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteProduct.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeleteProduct();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.productId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeleteProduct message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeleteProduct
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeleteProduct} DeleteProduct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteProduct.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeleteProduct message.
     * @function verify
     * @memberof DeleteProduct
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeleteProduct.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.productId != null && message.hasOwnProperty("productId"))
            if (!$util.isString(message.productId))
                return "productId: string expected";
        return null;
    };

    /**
     * Creates a DeleteProduct message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeleteProduct
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeleteProduct} DeleteProduct
     */
    DeleteProduct.fromObject = function fromObject(object) {
        if (object instanceof $root.DeleteProduct)
            return object;
        var message = new $root.DeleteProduct();
        if (object.productId != null)
            message.productId = String(object.productId);
        return message;
    };

    /**
     * Creates a plain object from a DeleteProduct message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeleteProduct
     * @static
     * @param {DeleteProduct} message DeleteProduct
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeleteProduct.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.productId = "";
        if (message.productId != null && message.hasOwnProperty("productId"))
            object.productId = message.productId;
        return object;
    };

    /**
     * Converts this DeleteProduct to JSON.
     * @function toJSON
     * @memberof DeleteProduct
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeleteProduct.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeleteProduct;
})();

$root.PutStock = (function() {

    /**
     * Properties of a PutStock.
     * @exports IPutStock
     * @interface IPutStock
     * @property {string} [productId] PutStock productId
     */

    /**
     * Constructs a new PutStock.
     * @exports PutStock
     * @classdesc Represents a PutStock.
     * @constructor
     * @param {IPutStock=} [properties] Properties to set
     */
    function PutStock(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PutStock productId.
     * @member {string}productId
     * @memberof PutStock
     * @instance
     */
    PutStock.prototype.productId = "";

    /**
     * Creates a new PutStock instance using the specified properties.
     * @function create
     * @memberof PutStock
     * @static
     * @param {IPutStock=} [properties] Properties to set
     * @returns {PutStock} PutStock instance
     */
    PutStock.create = function create(properties) {
        return new PutStock(properties);
    };

    /**
     * Encodes the specified PutStock message. Does not implicitly {@link PutStock.verify|verify} messages.
     * @function encode
     * @memberof PutStock
     * @static
     * @param {IPutStock} message PutStock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutStock.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.productId != null && message.hasOwnProperty("productId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.productId);
        return writer;
    };

    /**
     * Encodes the specified PutStock message, length delimited. Does not implicitly {@link PutStock.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PutStock
     * @static
     * @param {IPutStock} message PutStock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutStock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PutStock message from the specified reader or buffer.
     * @function decode
     * @memberof PutStock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PutStock} PutStock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutStock.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PutStock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.productId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PutStock message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PutStock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PutStock} PutStock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutStock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PutStock message.
     * @function verify
     * @memberof PutStock
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PutStock.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.productId != null && message.hasOwnProperty("productId"))
            if (!$util.isString(message.productId))
                return "productId: string expected";
        return null;
    };

    /**
     * Creates a PutStock message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PutStock
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PutStock} PutStock
     */
    PutStock.fromObject = function fromObject(object) {
        if (object instanceof $root.PutStock)
            return object;
        var message = new $root.PutStock();
        if (object.productId != null)
            message.productId = String(object.productId);
        return message;
    };

    /**
     * Creates a plain object from a PutStock message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PutStock
     * @static
     * @param {PutStock} message PutStock
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PutStock.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.productId = "";
        if (message.productId != null && message.hasOwnProperty("productId"))
            object.productId = message.productId;
        return object;
    };

    /**
     * Converts this PutStock to JSON.
     * @function toJSON
     * @memberof PutStock
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PutStock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PutStock;
})();

$root.PutImage = (function() {

    /**
     * Properties of a PutImage.
     * @exports IPutImage
     * @interface IPutImage
     * @property {string} [entityId] PutImage entityId
     * @property {string} [url] PutImage url
     */

    /**
     * Constructs a new PutImage.
     * @exports PutImage
     * @classdesc Represents a PutImage.
     * @constructor
     * @param {IPutImage=} [properties] Properties to set
     */
    function PutImage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PutImage entityId.
     * @member {string}entityId
     * @memberof PutImage
     * @instance
     */
    PutImage.prototype.entityId = "";

    /**
     * PutImage url.
     * @member {string}url
     * @memberof PutImage
     * @instance
     */
    PutImage.prototype.url = "";

    /**
     * Creates a new PutImage instance using the specified properties.
     * @function create
     * @memberof PutImage
     * @static
     * @param {IPutImage=} [properties] Properties to set
     * @returns {PutImage} PutImage instance
     */
    PutImage.create = function create(properties) {
        return new PutImage(properties);
    };

    /**
     * Encodes the specified PutImage message. Does not implicitly {@link PutImage.verify|verify} messages.
     * @function encode
     * @memberof PutImage
     * @static
     * @param {IPutImage} message PutImage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutImage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entityId != null && message.hasOwnProperty("entityId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
        if (message.url != null && message.hasOwnProperty("url"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
        return writer;
    };

    /**
     * Encodes the specified PutImage message, length delimited. Does not implicitly {@link PutImage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PutImage
     * @static
     * @param {IPutImage} message PutImage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutImage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PutImage message from the specified reader or buffer.
     * @function decode
     * @memberof PutImage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PutImage} PutImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutImage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PutImage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.entityId = reader.string();
                break;
            case 2:
                message.url = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PutImage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PutImage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PutImage} PutImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutImage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PutImage message.
     * @function verify
     * @memberof PutImage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PutImage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entityId != null && message.hasOwnProperty("entityId"))
            if (!$util.isString(message.entityId))
                return "entityId: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        return null;
    };

    /**
     * Creates a PutImage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PutImage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PutImage} PutImage
     */
    PutImage.fromObject = function fromObject(object) {
        if (object instanceof $root.PutImage)
            return object;
        var message = new $root.PutImage();
        if (object.entityId != null)
            message.entityId = String(object.entityId);
        if (object.url != null)
            message.url = String(object.url);
        return message;
    };

    /**
     * Creates a plain object from a PutImage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PutImage
     * @static
     * @param {PutImage} message PutImage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PutImage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.entityId = "";
            object.url = "";
        }
        if (message.entityId != null && message.hasOwnProperty("entityId"))
            object.entityId = message.entityId;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        return object;
    };

    /**
     * Converts this PutImage to JSON.
     * @function toJSON
     * @memberof PutImage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PutImage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PutImage;
})();

module.exports = $root;
