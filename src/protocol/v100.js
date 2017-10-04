/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.b3 || ($protobuf.roots.b3 = {});

$root.Result = (function() {

    /**
     * Properties of a Result.
     * @exports IResult
     * @interface IResult
     * @property {boolean} [ok] Result ok
     * @property {string} [id] Result id
     */

    /**
     * Constructs a new Result.
     * @exports Result
     * @classdesc Represents a Result.
     * @constructor
     * @param {IResult=} [properties] Properties to set
     */
    function Result(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Result ok.
     * @member {boolean}ok
     * @memberof Result
     * @instance
     */
    Result.prototype.ok = false;

    /**
     * Result id.
     * @member {string}id
     * @memberof Result
     * @instance
     */
    Result.prototype.id = "";

    /**
     * Creates a new Result instance using the specified properties.
     * @function create
     * @memberof Result
     * @static
     * @param {IResult=} [properties] Properties to set
     * @returns {Result} Result instance
     */
    Result.create = function create(properties) {
        return new Result(properties);
    };

    /**
     * Encodes the specified Result message. Does not implicitly {@link Result.verify|verify} messages.
     * @function encode
     * @memberof Result
     * @static
     * @param {IResult} message Result message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Result.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ok != null && message.hasOwnProperty("ok"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified Result message, length delimited. Does not implicitly {@link Result.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Result
     * @static
     * @param {IResult} message Result message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Result.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Result message from the specified reader or buffer.
     * @function decode
     * @memberof Result
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Result} Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Result.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Result();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ok = reader.bool();
                break;
            case 2:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Result message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Result
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Result} Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Result.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Result message.
     * @function verify
     * @memberof Result
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Result.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ok != null && message.hasOwnProperty("ok"))
            if (typeof message.ok !== "boolean")
                return "ok: boolean expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a Result message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Result
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Result} Result
     */
    Result.fromObject = function fromObject(object) {
        if (object instanceof $root.Result)
            return object;
        var message = new $root.Result();
        if (object.ok != null)
            message.ok = Boolean(object.ok);
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a Result message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Result
     * @static
     * @param {Result} message Result
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Result.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ok = false;
            object.id = "";
        }
        if (message.ok != null && message.hasOwnProperty("ok"))
            object.ok = message.ok;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this Result to JSON.
     * @function toJSON
     * @memberof Result
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Result.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Result;
})();

$root.Command = (function() {

    /**
     * Properties of a Command.
     * @exports ICommand
     * @interface ICommand
     * @property {string} [id] Command id
     * @property {IPutProduct} [putProduct] Command putProduct
     * @property {IDeleteProduct} [deleteProduct] Command deleteProduct
     * @property {IPutStock} [putStock] Command putStock
     * @property {IPutImage} [putImage] Command putImage
     */

    /**
     * Constructs a new Command.
     * @exports Command
     * @classdesc Represents a Command.
     * @constructor
     * @param {ICommand=} [properties] Properties to set
     */
    function Command(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Command id.
     * @member {string}id
     * @memberof Command
     * @instance
     */
    Command.prototype.id = "";

    /**
     * Command putProduct.
     * @member {(IPutProduct|null|undefined)}putProduct
     * @memberof Command
     * @instance
     */
    Command.prototype.putProduct = null;

    /**
     * Command deleteProduct.
     * @member {(IDeleteProduct|null|undefined)}deleteProduct
     * @memberof Command
     * @instance
     */
    Command.prototype.deleteProduct = null;

    /**
     * Command putStock.
     * @member {(IPutStock|null|undefined)}putStock
     * @memberof Command
     * @instance
     */
    Command.prototype.putStock = null;

    /**
     * Command putImage.
     * @member {(IPutImage|null|undefined)}putImage
     * @memberof Command
     * @instance
     */
    Command.prototype.putImage = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Command updateType.
     * @member {string|undefined} updateType
     * @memberof Command
     * @instance
     */
    Object.defineProperty(Command.prototype, "updateType", {
        get: $util.oneOfGetter($oneOfFields = ["putProduct", "deleteProduct", "putStock", "putImage"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Command instance using the specified properties.
     * @function create
     * @memberof Command
     * @static
     * @param {ICommand=} [properties] Properties to set
     * @returns {Command} Command instance
     */
    Command.create = function create(properties) {
        return new Command(properties);
    };

    /**
     * Encodes the specified Command message. Does not implicitly {@link Command.verify|verify} messages.
     * @function encode
     * @memberof Command
     * @static
     * @param {ICommand} message Command message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Command.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.putProduct != null && message.hasOwnProperty("putProduct"))
            $root.PutProduct.encode(message.putProduct, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.deleteProduct != null && message.hasOwnProperty("deleteProduct"))
            $root.DeleteProduct.encode(message.deleteProduct, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.putStock != null && message.hasOwnProperty("putStock"))
            $root.PutStock.encode(message.putStock, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.putImage != null && message.hasOwnProperty("putImage"))
            $root.PutImage.encode(message.putImage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Command message, length delimited. Does not implicitly {@link Command.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Command
     * @static
     * @param {ICommand} message Command message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Command.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Command message from the specified reader or buffer.
     * @function decode
     * @memberof Command
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Command} Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Command.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Command();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.putProduct = $root.PutProduct.decode(reader, reader.uint32());
                break;
            case 3:
                message.deleteProduct = $root.DeleteProduct.decode(reader, reader.uint32());
                break;
            case 4:
                message.putStock = $root.PutStock.decode(reader, reader.uint32());
                break;
            case 5:
                message.putImage = $root.PutImage.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Command message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Command
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Command} Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Command.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Command message.
     * @function verify
     * @memberof Command
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Command.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.putProduct != null && message.hasOwnProperty("putProduct")) {
            properties.updateType = 1;
            var error = $root.PutProduct.verify(message.putProduct);
            if (error)
                return "putProduct." + error;
        }
        if (message.deleteProduct != null && message.hasOwnProperty("deleteProduct")) {
            if (properties.updateType === 1)
                return "updateType: multiple values";
            properties.updateType = 1;
            error = $root.DeleteProduct.verify(message.deleteProduct);
            if (error)
                return "deleteProduct." + error;
        }
        if (message.putStock != null && message.hasOwnProperty("putStock")) {
            if (properties.updateType === 1)
                return "updateType: multiple values";
            properties.updateType = 1;
            error = $root.PutStock.verify(message.putStock);
            if (error)
                return "putStock." + error;
        }
        if (message.putImage != null && message.hasOwnProperty("putImage")) {
            if (properties.updateType === 1)
                return "updateType: multiple values";
            properties.updateType = 1;
            error = $root.PutImage.verify(message.putImage);
            if (error)
                return "putImage." + error;
        }
        return null;
    };

    /**
     * Creates a Command message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Command
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Command} Command
     */
    Command.fromObject = function fromObject(object) {
        if (object instanceof $root.Command)
            return object;
        var message = new $root.Command();
        if (object.id != null)
            message.id = String(object.id);
        if (object.putProduct != null) {
            if (typeof object.putProduct !== "object")
                throw TypeError(".Command.putProduct: object expected");
            message.putProduct = $root.PutProduct.fromObject(object.putProduct);
        }
        if (object.deleteProduct != null) {
            if (typeof object.deleteProduct !== "object")
                throw TypeError(".Command.deleteProduct: object expected");
            message.deleteProduct = $root.DeleteProduct.fromObject(object.deleteProduct);
        }
        if (object.putStock != null) {
            if (typeof object.putStock !== "object")
                throw TypeError(".Command.putStock: object expected");
            message.putStock = $root.PutStock.fromObject(object.putStock);
        }
        if (object.putImage != null) {
            if (typeof object.putImage !== "object")
                throw TypeError(".Command.putImage: object expected");
            message.putImage = $root.PutImage.fromObject(object.putImage);
        }
        return message;
    };

    /**
     * Creates a plain object from a Command message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Command
     * @static
     * @param {Command} message Command
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Command.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.putProduct != null && message.hasOwnProperty("putProduct")) {
            object.putProduct = $root.PutProduct.toObject(message.putProduct, options);
            if (options.oneofs)
                object.updateType = "putProduct";
        }
        if (message.deleteProduct != null && message.hasOwnProperty("deleteProduct")) {
            object.deleteProduct = $root.DeleteProduct.toObject(message.deleteProduct, options);
            if (options.oneofs)
                object.updateType = "deleteProduct";
        }
        if (message.putStock != null && message.hasOwnProperty("putStock")) {
            object.putStock = $root.PutStock.toObject(message.putStock, options);
            if (options.oneofs)
                object.updateType = "putStock";
        }
        if (message.putImage != null && message.hasOwnProperty("putImage")) {
            object.putImage = $root.PutImage.toObject(message.putImage, options);
            if (options.oneofs)
                object.updateType = "putImage";
        }
        return object;
    };

    /**
     * Converts this Command to JSON.
     * @function toJSON
     * @memberof Command
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Command.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Command;
})();

$root.Nop = (function() {

    /**
     * Properties of a Nop.
     * @exports INop
     * @interface INop
     */

    /**
     * Constructs a new Nop.
     * @exports Nop
     * @classdesc Represents a Nop.
     * @constructor
     * @param {INop=} [properties] Properties to set
     */
    function Nop(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Nop instance using the specified properties.
     * @function create
     * @memberof Nop
     * @static
     * @param {INop=} [properties] Properties to set
     * @returns {Nop} Nop instance
     */
    Nop.create = function create(properties) {
        return new Nop(properties);
    };

    /**
     * Encodes the specified Nop message. Does not implicitly {@link Nop.verify|verify} messages.
     * @function encode
     * @memberof Nop
     * @static
     * @param {INop} message Nop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Nop.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Nop message, length delimited. Does not implicitly {@link Nop.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Nop
     * @static
     * @param {INop} message Nop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Nop.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Nop message from the specified reader or buffer.
     * @function decode
     * @memberof Nop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Nop} Nop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Nop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Nop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Nop message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Nop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Nop} Nop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Nop.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Nop message.
     * @function verify
     * @memberof Nop
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Nop.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Nop message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Nop
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Nop} Nop
     */
    Nop.fromObject = function fromObject(object) {
        if (object instanceof $root.Nop)
            return object;
        return new $root.Nop();
    };

    /**
     * Creates a plain object from a Nop message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Nop
     * @static
     * @param {Nop} message Nop
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Nop.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Nop to JSON.
     * @function toJSON
     * @memberof Nop
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Nop.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Nop;
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
