/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.woodpigeon = (function() {

        /**
         * Namespace woodpigeon.
         * @memberof com
         * @namespace
         */
        var woodpigeon = {};

        woodpigeon.b3 = (function() {

            /**
             * Namespace b3.
             * @memberof com.woodpigeon
             * @namespace
             */
            var b3 = {};

            b3.store = (function() {

                /**
                 * Namespace store.
                 * @memberof com.woodpigeon.b3
                 * @namespace
                 */
                var store = {};

                store.Update = (function() {

                    /**
                     * Properties of an Update.
                     * @memberof com.woodpigeon.b3.store
                     * @interface IUpdate
                     * @property {string} [id] Update id
                     * @property {com.woodpigeon.b3.store.Update.IPutProduct} [putProduct] Update putProduct
                     * @property {com.woodpigeon.b3.store.Update.IDeleteProduct} [deleteProduct] Update deleteProduct
                     * @property {com.woodpigeon.b3.store.Update.IPutStock} [putStock] Update putStock
                     * @property {com.woodpigeon.b3.store.Update.IPutImage} [putImage] Update putImage
                     */

                    /**
                     * Constructs a new Update.
                     * @memberof com.woodpigeon.b3.store
                     * @classdesc Represents an Update.
                     * @constructor
                     * @param {com.woodpigeon.b3.store.IUpdate=} [properties] Properties to set
                     */
                    function Update(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Update id.
                     * @member {string}id
                     * @memberof com.woodpigeon.b3.store.Update
                     * @instance
                     */
                    Update.prototype.id = "";

                    /**
                     * Update putProduct.
                     * @member {(com.woodpigeon.b3.store.Update.IPutProduct|null|undefined)}putProduct
                     * @memberof com.woodpigeon.b3.store.Update
                     * @instance
                     */
                    Update.prototype.putProduct = null;

                    /**
                     * Update deleteProduct.
                     * @member {(com.woodpigeon.b3.store.Update.IDeleteProduct|null|undefined)}deleteProduct
                     * @memberof com.woodpigeon.b3.store.Update
                     * @instance
                     */
                    Update.prototype.deleteProduct = null;

                    /**
                     * Update putStock.
                     * @member {(com.woodpigeon.b3.store.Update.IPutStock|null|undefined)}putStock
                     * @memberof com.woodpigeon.b3.store.Update
                     * @instance
                     */
                    Update.prototype.putStock = null;

                    /**
                     * Update putImage.
                     * @member {(com.woodpigeon.b3.store.Update.IPutImage|null|undefined)}putImage
                     * @memberof com.woodpigeon.b3.store.Update
                     * @instance
                     */
                    Update.prototype.putImage = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Update type.
                     * @member {string|undefined} type
                     * @memberof com.woodpigeon.b3.store.Update
                     * @instance
                     */
                    Object.defineProperty(Update.prototype, "type", {
                        get: $util.oneOfGetter($oneOfFields = ["putProduct", "deleteProduct", "putStock", "putImage"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Update instance using the specified properties.
                     * @function create
                     * @memberof com.woodpigeon.b3.store.Update
                     * @static
                     * @param {com.woodpigeon.b3.store.IUpdate=} [properties] Properties to set
                     * @returns {com.woodpigeon.b3.store.Update} Update instance
                     */
                    Update.create = function create(properties) {
                        return new Update(properties);
                    };

                    /**
                     * Encodes the specified Update message. Does not implicitly {@link com.woodpigeon.b3.store.Update.verify|verify} messages.
                     * @function encode
                     * @memberof com.woodpigeon.b3.store.Update
                     * @static
                     * @param {com.woodpigeon.b3.store.IUpdate} message Update message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Update.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.putProduct != null && message.hasOwnProperty("putProduct"))
                            $root.com.woodpigeon.b3.store.Update.PutProduct.encode(message.putProduct, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.deleteProduct != null && message.hasOwnProperty("deleteProduct"))
                            $root.com.woodpigeon.b3.store.Update.DeleteProduct.encode(message.deleteProduct, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.putStock != null && message.hasOwnProperty("putStock"))
                            $root.com.woodpigeon.b3.store.Update.PutStock.encode(message.putStock, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.putImage != null && message.hasOwnProperty("putImage"))
                            $root.com.woodpigeon.b3.store.Update.PutImage.encode(message.putImage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Update message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.woodpigeon.b3.store.Update
                     * @static
                     * @param {com.woodpigeon.b3.store.IUpdate} message Update message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Update.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Update message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.woodpigeon.b3.store.Update
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.woodpigeon.b3.store.Update} Update
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Update.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.woodpigeon.b3.store.Update();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.putProduct = $root.com.woodpigeon.b3.store.Update.PutProduct.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.deleteProduct = $root.com.woodpigeon.b3.store.Update.DeleteProduct.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.putStock = $root.com.woodpigeon.b3.store.Update.PutStock.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.putImage = $root.com.woodpigeon.b3.store.Update.PutImage.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Update message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.woodpigeon.b3.store.Update
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.woodpigeon.b3.store.Update} Update
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Update.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Update message.
                     * @function verify
                     * @memberof com.woodpigeon.b3.store.Update
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Update.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.putProduct != null && message.hasOwnProperty("putProduct")) {
                            properties.type = 1;
                            var error = $root.com.woodpigeon.b3.store.Update.PutProduct.verify(message.putProduct);
                            if (error)
                                return "putProduct." + error;
                        }
                        if (message.deleteProduct != null && message.hasOwnProperty("deleteProduct")) {
                            if (properties.type === 1)
                                return "type: multiple values";
                            properties.type = 1;
                            error = $root.com.woodpigeon.b3.store.Update.DeleteProduct.verify(message.deleteProduct);
                            if (error)
                                return "deleteProduct." + error;
                        }
                        if (message.putStock != null && message.hasOwnProperty("putStock")) {
                            if (properties.type === 1)
                                return "type: multiple values";
                            properties.type = 1;
                            error = $root.com.woodpigeon.b3.store.Update.PutStock.verify(message.putStock);
                            if (error)
                                return "putStock." + error;
                        }
                        if (message.putImage != null && message.hasOwnProperty("putImage")) {
                            if (properties.type === 1)
                                return "type: multiple values";
                            properties.type = 1;
                            error = $root.com.woodpigeon.b3.store.Update.PutImage.verify(message.putImage);
                            if (error)
                                return "putImage." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an Update message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.woodpigeon.b3.store.Update
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.woodpigeon.b3.store.Update} Update
                     */
                    Update.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.woodpigeon.b3.store.Update)
                            return object;
                        var message = new $root.com.woodpigeon.b3.store.Update();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.putProduct != null) {
                            if (typeof object.putProduct !== "object")
                                throw TypeError(".com.woodpigeon.b3.store.Update.putProduct: object expected");
                            message.putProduct = $root.com.woodpigeon.b3.store.Update.PutProduct.fromObject(object.putProduct);
                        }
                        if (object.deleteProduct != null) {
                            if (typeof object.deleteProduct !== "object")
                                throw TypeError(".com.woodpigeon.b3.store.Update.deleteProduct: object expected");
                            message.deleteProduct = $root.com.woodpigeon.b3.store.Update.DeleteProduct.fromObject(object.deleteProduct);
                        }
                        if (object.putStock != null) {
                            if (typeof object.putStock !== "object")
                                throw TypeError(".com.woodpigeon.b3.store.Update.putStock: object expected");
                            message.putStock = $root.com.woodpigeon.b3.store.Update.PutStock.fromObject(object.putStock);
                        }
                        if (object.putImage != null) {
                            if (typeof object.putImage !== "object")
                                throw TypeError(".com.woodpigeon.b3.store.Update.putImage: object expected");
                            message.putImage = $root.com.woodpigeon.b3.store.Update.PutImage.fromObject(object.putImage);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Update message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.woodpigeon.b3.store.Update
                     * @static
                     * @param {com.woodpigeon.b3.store.Update} message Update
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Update.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.id = "";
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.putProduct != null && message.hasOwnProperty("putProduct")) {
                            object.putProduct = $root.com.woodpigeon.b3.store.Update.PutProduct.toObject(message.putProduct, options);
                            if (options.oneofs)
                                object.type = "putProduct";
                        }
                        if (message.deleteProduct != null && message.hasOwnProperty("deleteProduct")) {
                            object.deleteProduct = $root.com.woodpigeon.b3.store.Update.DeleteProduct.toObject(message.deleteProduct, options);
                            if (options.oneofs)
                                object.type = "deleteProduct";
                        }
                        if (message.putStock != null && message.hasOwnProperty("putStock")) {
                            object.putStock = $root.com.woodpigeon.b3.store.Update.PutStock.toObject(message.putStock, options);
                            if (options.oneofs)
                                object.type = "putStock";
                        }
                        if (message.putImage != null && message.hasOwnProperty("putImage")) {
                            object.putImage = $root.com.woodpigeon.b3.store.Update.PutImage.toObject(message.putImage, options);
                            if (options.oneofs)
                                object.type = "putImage";
                        }
                        return object;
                    };

                    /**
                     * Converts this Update to JSON.
                     * @function toJSON
                     * @memberof com.woodpigeon.b3.store.Update
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Update.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    Update.PutProduct = (function() {

                        /**
                         * Properties of a PutProduct.
                         * @memberof com.woodpigeon.b3.store.Update
                         * @interface IPutProduct
                         * @property {string} [productId] PutProduct productId
                         * @property {string} [name] PutProduct name
                         */

                        /**
                         * Constructs a new PutProduct.
                         * @memberof com.woodpigeon.b3.store.Update
                         * @classdesc Represents a PutProduct.
                         * @constructor
                         * @param {com.woodpigeon.b3.store.Update.IPutProduct=} [properties] Properties to set
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
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @instance
                         */
                        PutProduct.prototype.productId = "";

                        /**
                         * PutProduct name.
                         * @member {string}name
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @instance
                         */
                        PutProduct.prototype.name = "";

                        /**
                         * Creates a new PutProduct instance using the specified properties.
                         * @function create
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutProduct=} [properties] Properties to set
                         * @returns {com.woodpigeon.b3.store.Update.PutProduct} PutProduct instance
                         */
                        PutProduct.create = function create(properties) {
                            return new PutProduct(properties);
                        };

                        /**
                         * Encodes the specified PutProduct message. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutProduct.verify|verify} messages.
                         * @function encode
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutProduct} message PutProduct message or plain object to encode
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
                         * Encodes the specified PutProduct message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutProduct.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutProduct} message PutProduct message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PutProduct.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a PutProduct message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.woodpigeon.b3.store.Update.PutProduct} PutProduct
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PutProduct.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.woodpigeon.b3.store.Update.PutProduct();
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
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.woodpigeon.b3.store.Update.PutProduct} PutProduct
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
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
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
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.woodpigeon.b3.store.Update.PutProduct} PutProduct
                         */
                        PutProduct.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.woodpigeon.b3.store.Update.PutProduct)
                                return object;
                            var message = new $root.com.woodpigeon.b3.store.Update.PutProduct();
                            if (object.productId != null)
                                message.productId = String(object.productId);
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };

                        /**
                         * Creates a plain object from a PutProduct message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.PutProduct} message PutProduct
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
                         * @memberof com.woodpigeon.b3.store.Update.PutProduct
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PutProduct.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return PutProduct;
                    })();

                    Update.DeleteProduct = (function() {

                        /**
                         * Properties of a DeleteProduct.
                         * @memberof com.woodpigeon.b3.store.Update
                         * @interface IDeleteProduct
                         * @property {string} [productId] DeleteProduct productId
                         */

                        /**
                         * Constructs a new DeleteProduct.
                         * @memberof com.woodpigeon.b3.store.Update
                         * @classdesc Represents a DeleteProduct.
                         * @constructor
                         * @param {com.woodpigeon.b3.store.Update.IDeleteProduct=} [properties] Properties to set
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
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @instance
                         */
                        DeleteProduct.prototype.productId = "";

                        /**
                         * Creates a new DeleteProduct instance using the specified properties.
                         * @function create
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IDeleteProduct=} [properties] Properties to set
                         * @returns {com.woodpigeon.b3.store.Update.DeleteProduct} DeleteProduct instance
                         */
                        DeleteProduct.create = function create(properties) {
                            return new DeleteProduct(properties);
                        };

                        /**
                         * Encodes the specified DeleteProduct message. Does not implicitly {@link com.woodpigeon.b3.store.Update.DeleteProduct.verify|verify} messages.
                         * @function encode
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IDeleteProduct} message DeleteProduct message or plain object to encode
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
                         * Encodes the specified DeleteProduct message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.DeleteProduct.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IDeleteProduct} message DeleteProduct message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteProduct.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a DeleteProduct message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.woodpigeon.b3.store.Update.DeleteProduct} DeleteProduct
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteProduct.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.woodpigeon.b3.store.Update.DeleteProduct();
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
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.woodpigeon.b3.store.Update.DeleteProduct} DeleteProduct
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
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
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
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.woodpigeon.b3.store.Update.DeleteProduct} DeleteProduct
                         */
                        DeleteProduct.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.woodpigeon.b3.store.Update.DeleteProduct)
                                return object;
                            var message = new $root.com.woodpigeon.b3.store.Update.DeleteProduct();
                            if (object.productId != null)
                                message.productId = String(object.productId);
                            return message;
                        };

                        /**
                         * Creates a plain object from a DeleteProduct message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.DeleteProduct} message DeleteProduct
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
                         * @memberof com.woodpigeon.b3.store.Update.DeleteProduct
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DeleteProduct.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return DeleteProduct;
                    })();

                    Update.PutStock = (function() {

                        /**
                         * Properties of a PutStock.
                         * @memberof com.woodpigeon.b3.store.Update
                         * @interface IPutStock
                         * @property {string} [productId] PutStock productId
                         */

                        /**
                         * Constructs a new PutStock.
                         * @memberof com.woodpigeon.b3.store.Update
                         * @classdesc Represents a PutStock.
                         * @constructor
                         * @param {com.woodpigeon.b3.store.Update.IPutStock=} [properties] Properties to set
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
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @instance
                         */
                        PutStock.prototype.productId = "";

                        /**
                         * Creates a new PutStock instance using the specified properties.
                         * @function create
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutStock=} [properties] Properties to set
                         * @returns {com.woodpigeon.b3.store.Update.PutStock} PutStock instance
                         */
                        PutStock.create = function create(properties) {
                            return new PutStock(properties);
                        };

                        /**
                         * Encodes the specified PutStock message. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutStock.verify|verify} messages.
                         * @function encode
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutStock} message PutStock message or plain object to encode
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
                         * Encodes the specified PutStock message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutStock.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutStock} message PutStock message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PutStock.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a PutStock message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.woodpigeon.b3.store.Update.PutStock} PutStock
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PutStock.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.woodpigeon.b3.store.Update.PutStock();
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
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.woodpigeon.b3.store.Update.PutStock} PutStock
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
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
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
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.woodpigeon.b3.store.Update.PutStock} PutStock
                         */
                        PutStock.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.woodpigeon.b3.store.Update.PutStock)
                                return object;
                            var message = new $root.com.woodpigeon.b3.store.Update.PutStock();
                            if (object.productId != null)
                                message.productId = String(object.productId);
                            return message;
                        };

                        /**
                         * Creates a plain object from a PutStock message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.PutStock} message PutStock
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
                         * @memberof com.woodpigeon.b3.store.Update.PutStock
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PutStock.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return PutStock;
                    })();

                    Update.PutImage = (function() {

                        /**
                         * Properties of a PutImage.
                         * @memberof com.woodpigeon.b3.store.Update
                         * @interface IPutImage
                         * @property {string} [entityId] PutImage entityId
                         * @property {string} [url] PutImage url
                         */

                        /**
                         * Constructs a new PutImage.
                         * @memberof com.woodpigeon.b3.store.Update
                         * @classdesc Represents a PutImage.
                         * @constructor
                         * @param {com.woodpigeon.b3.store.Update.IPutImage=} [properties] Properties to set
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
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @instance
                         */
                        PutImage.prototype.entityId = "";

                        /**
                         * PutImage url.
                         * @member {string}url
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @instance
                         */
                        PutImage.prototype.url = "";

                        /**
                         * Creates a new PutImage instance using the specified properties.
                         * @function create
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutImage=} [properties] Properties to set
                         * @returns {com.woodpigeon.b3.store.Update.PutImage} PutImage instance
                         */
                        PutImage.create = function create(properties) {
                            return new PutImage(properties);
                        };

                        /**
                         * Encodes the specified PutImage message. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutImage.verify|verify} messages.
                         * @function encode
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutImage} message PutImage message or plain object to encode
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
                         * Encodes the specified PutImage message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutImage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.IPutImage} message PutImage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PutImage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a PutImage message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.woodpigeon.b3.store.Update.PutImage} PutImage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PutImage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.woodpigeon.b3.store.Update.PutImage();
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
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.woodpigeon.b3.store.Update.PutImage} PutImage
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
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
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
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.woodpigeon.b3.store.Update.PutImage} PutImage
                         */
                        PutImage.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.woodpigeon.b3.store.Update.PutImage)
                                return object;
                            var message = new $root.com.woodpigeon.b3.store.Update.PutImage();
                            if (object.entityId != null)
                                message.entityId = String(object.entityId);
                            if (object.url != null)
                                message.url = String(object.url);
                            return message;
                        };

                        /**
                         * Creates a plain object from a PutImage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @static
                         * @param {com.woodpigeon.b3.store.Update.PutImage} message PutImage
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
                         * @memberof com.woodpigeon.b3.store.Update.PutImage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PutImage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return PutImage;
                    })();

                    return Update;
                })();

                return store;
            })();

            return b3;
        })();

        return woodpigeon;
    })();

    return com;
})();

module.exports = $root;
