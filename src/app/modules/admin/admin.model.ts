import { Schema, model } from 'mongoose';
import { IAdmin } from './admin.interface';
import { Role } from './admin.constant';
import bcrypt from 'bcrypt';
import config from '../../../config';

const AdminSchema = new Schema<IAdmin>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: true,
        },
        role: {
            type: String,
            enum: Role
        },
        password: {
            type: String,
            required: true,
            select: 0,
        },
        name: {
            type: {
                firstName: {
                    type: String,
                    required: true,
                },
                lastName: {
                    type: String,
                    required: true,
                }
            },
            required: true,
        },
        address: {
            type: String,
            required: true,
        }

    },
    {
        timestamps: true,
    }
);

AdminSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    // obj.hello=5;
    return obj;
}

AdminSchema.pre('save', async function (next) {
    //hashing password
    // console.log(this);
    // this.id=56
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds))
    next();
});

export const Admin = model<IAdmin>('Admin', AdminSchema);
