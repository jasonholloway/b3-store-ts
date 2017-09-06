import * as $protobuf from "protobufjs";

/** Namespace com. */
export namespace com {

    /** Namespace woodpigeon. */
    namespace woodpigeon {

        /** Namespace b3. */
        namespace b3 {

            /** Namespace store. */
            namespace store {

                /** Properties of an Update. */
                interface IUpdate {

                    /** Update id */
                    id?: string;

                    /** Update putProduct */
                    putProduct?: com.woodpigeon.b3.store.Update.IPutProduct;

                    /** Update deleteProduct */
                    deleteProduct?: com.woodpigeon.b3.store.Update.IDeleteProduct;

                    /** Update putStock */
                    putStock?: com.woodpigeon.b3.store.Update.IPutStock;

                    /** Update putImage */
                    putImage?: com.woodpigeon.b3.store.Update.IPutImage;
                }

                /** Represents an Update. */
                class Update {

                    /**
                     * Constructs a new Update.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.woodpigeon.b3.store.IUpdate);

                    /** Update id. */
                    public id: string;

                    /** Update putProduct. */
                    public putProduct?: (com.woodpigeon.b3.store.Update.IPutProduct|null);

                    /** Update deleteProduct. */
                    public deleteProduct?: (com.woodpigeon.b3.store.Update.IDeleteProduct|null);

                    /** Update putStock. */
                    public putStock?: (com.woodpigeon.b3.store.Update.IPutStock|null);

                    /** Update putImage. */
                    public putImage?: (com.woodpigeon.b3.store.Update.IPutImage|null);

                    /** Update type. */
                    public type?: string;

                    /**
                     * Creates a new Update instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Update instance
                     */
                    public static create(properties?: com.woodpigeon.b3.store.IUpdate): com.woodpigeon.b3.store.Update;

                    /**
                     * Encodes the specified Update message. Does not implicitly {@link com.woodpigeon.b3.store.Update.verify|verify} messages.
                     * @param message Update message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.woodpigeon.b3.store.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Update message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.verify|verify} messages.
                     * @param message Update message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.woodpigeon.b3.store.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Update message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Update
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.woodpigeon.b3.store.Update;

                    /**
                     * Decodes an Update message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Update
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.woodpigeon.b3.store.Update;

                    /**
                     * Verifies an Update message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Update message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Update
                     */
                    public static fromObject(object: { [k: string]: any }): com.woodpigeon.b3.store.Update;

                    /**
                     * Creates a plain object from an Update message. Also converts values to other types if specified.
                     * @param message Update
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.woodpigeon.b3.store.Update, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Update to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Update {

                    /** Properties of a PutProduct. */
                    interface IPutProduct {

                        /** PutProduct productId */
                        productId?: string;

                        /** PutProduct name */
                        name?: string;
                    }

                    /** Represents a PutProduct. */
                    class PutProduct {

                        /**
                         * Constructs a new PutProduct.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.woodpigeon.b3.store.Update.IPutProduct);

                        /** PutProduct productId. */
                        public productId: string;

                        /** PutProduct name. */
                        public name: string;

                        /**
                         * Creates a new PutProduct instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PutProduct instance
                         */
                        public static create(properties?: com.woodpigeon.b3.store.Update.IPutProduct): com.woodpigeon.b3.store.Update.PutProduct;

                        /**
                         * Encodes the specified PutProduct message. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutProduct.verify|verify} messages.
                         * @param message PutProduct message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.woodpigeon.b3.store.Update.IPutProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PutProduct message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutProduct.verify|verify} messages.
                         * @param message PutProduct message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.woodpigeon.b3.store.Update.IPutProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PutProduct message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PutProduct
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.woodpigeon.b3.store.Update.PutProduct;

                        /**
                         * Decodes a PutProduct message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PutProduct
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.woodpigeon.b3.store.Update.PutProduct;

                        /**
                         * Verifies a PutProduct message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PutProduct message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PutProduct
                         */
                        public static fromObject(object: { [k: string]: any }): com.woodpigeon.b3.store.Update.PutProduct;

                        /**
                         * Creates a plain object from a PutProduct message. Also converts values to other types if specified.
                         * @param message PutProduct
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.woodpigeon.b3.store.Update.PutProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PutProduct to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteProduct. */
                    interface IDeleteProduct {

                        /** DeleteProduct productId */
                        productId?: string;
                    }

                    /** Represents a DeleteProduct. */
                    class DeleteProduct {

                        /**
                         * Constructs a new DeleteProduct.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.woodpigeon.b3.store.Update.IDeleteProduct);

                        /** DeleteProduct productId. */
                        public productId: string;

                        /**
                         * Creates a new DeleteProduct instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteProduct instance
                         */
                        public static create(properties?: com.woodpigeon.b3.store.Update.IDeleteProduct): com.woodpigeon.b3.store.Update.DeleteProduct;

                        /**
                         * Encodes the specified DeleteProduct message. Does not implicitly {@link com.woodpigeon.b3.store.Update.DeleteProduct.verify|verify} messages.
                         * @param message DeleteProduct message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.woodpigeon.b3.store.Update.IDeleteProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteProduct message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.DeleteProduct.verify|verify} messages.
                         * @param message DeleteProduct message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.woodpigeon.b3.store.Update.IDeleteProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteProduct message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteProduct
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.woodpigeon.b3.store.Update.DeleteProduct;

                        /**
                         * Decodes a DeleteProduct message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteProduct
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.woodpigeon.b3.store.Update.DeleteProduct;

                        /**
                         * Verifies a DeleteProduct message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteProduct message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteProduct
                         */
                        public static fromObject(object: { [k: string]: any }): com.woodpigeon.b3.store.Update.DeleteProduct;

                        /**
                         * Creates a plain object from a DeleteProduct message. Also converts values to other types if specified.
                         * @param message DeleteProduct
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.woodpigeon.b3.store.Update.DeleteProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteProduct to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PutStock. */
                    interface IPutStock {

                        /** PutStock productId */
                        productId?: string;
                    }

                    /** Represents a PutStock. */
                    class PutStock {

                        /**
                         * Constructs a new PutStock.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.woodpigeon.b3.store.Update.IPutStock);

                        /** PutStock productId. */
                        public productId: string;

                        /**
                         * Creates a new PutStock instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PutStock instance
                         */
                        public static create(properties?: com.woodpigeon.b3.store.Update.IPutStock): com.woodpigeon.b3.store.Update.PutStock;

                        /**
                         * Encodes the specified PutStock message. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutStock.verify|verify} messages.
                         * @param message PutStock message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.woodpigeon.b3.store.Update.IPutStock, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PutStock message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutStock.verify|verify} messages.
                         * @param message PutStock message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.woodpigeon.b3.store.Update.IPutStock, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PutStock message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PutStock
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.woodpigeon.b3.store.Update.PutStock;

                        /**
                         * Decodes a PutStock message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PutStock
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.woodpigeon.b3.store.Update.PutStock;

                        /**
                         * Verifies a PutStock message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PutStock message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PutStock
                         */
                        public static fromObject(object: { [k: string]: any }): com.woodpigeon.b3.store.Update.PutStock;

                        /**
                         * Creates a plain object from a PutStock message. Also converts values to other types if specified.
                         * @param message PutStock
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.woodpigeon.b3.store.Update.PutStock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PutStock to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PutImage. */
                    interface IPutImage {

                        /** PutImage entityId */
                        entityId?: string;

                        /** PutImage url */
                        url?: string;
                    }

                    /** Represents a PutImage. */
                    class PutImage {

                        /**
                         * Constructs a new PutImage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.woodpigeon.b3.store.Update.IPutImage);

                        /** PutImage entityId. */
                        public entityId: string;

                        /** PutImage url. */
                        public url: string;

                        /**
                         * Creates a new PutImage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PutImage instance
                         */
                        public static create(properties?: com.woodpigeon.b3.store.Update.IPutImage): com.woodpigeon.b3.store.Update.PutImage;

                        /**
                         * Encodes the specified PutImage message. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutImage.verify|verify} messages.
                         * @param message PutImage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.woodpigeon.b3.store.Update.IPutImage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PutImage message, length delimited. Does not implicitly {@link com.woodpigeon.b3.store.Update.PutImage.verify|verify} messages.
                         * @param message PutImage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.woodpigeon.b3.store.Update.IPutImage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PutImage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PutImage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.woodpigeon.b3.store.Update.PutImage;

                        /**
                         * Decodes a PutImage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PutImage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.woodpigeon.b3.store.Update.PutImage;

                        /**
                         * Verifies a PutImage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PutImage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PutImage
                         */
                        public static fromObject(object: { [k: string]: any }): com.woodpigeon.b3.store.Update.PutImage;

                        /**
                         * Creates a plain object from a PutImage message. Also converts values to other types if specified.
                         * @param message PutImage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.woodpigeon.b3.store.Update.PutImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PutImage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}
