import {executeQuery} from "@/pages/utils/database";

export default async function inquiry(req, resp) {
    if (req.method === 'POST') {
        try {
            // validate parameter
            let form = ['company', 'name', 'contact', 'email', 'box', 'quantity', 'region', 'description'];
            form.forEach((param) => {
                switch (param) {
                    case 'company' :
                    case 'name' :
                    case 'box' :
                    case 'quantity' :
                    case 'region' :
                    case 'contact' :
                    case 'email' :
                        if (req.body[param] === null || req.body[param].trim().length === 0) {
                            return resp.status(400).json(param + ' is null');
                        }
                        if (req.body[param].length > 30) {
                            return resp.status(400).json(param + ' is too long');
                        }
                        if (param === 'contact') {
                            const contactRegex = /^([0-9]{3,4})-?([0-9]{3,4})-?([0-9]{3,4})$/;
                            if (!contactRegex.test(req.body[param])) {
                                return resp.status(400).json(param + ' is invalid');
                            }
                        }
                        if (param === 'email') {
                            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                            if (!emailRegex.test(req.body[param])) {
                                return resp.status(400).json(param + ' is invalid');
                            }
                        }
                        break;
                    default :
                        break;
                }
            });
            const params = [
                req.body.company,
                req.body.name,
                req.body.contact,
                req.body.email,
                req.body.box,
                req.body.quantity,
                req.body.region,
                req.body.description,
            ];
            const query = 'INSERT INTO inquiry (`company`, `name`, `contact`, `email`, `box`, `quantity`, `region`, `description`) VALUES (?,?,?,?,?,?,?,?)';
            const result = await executeQuery(query, params);

            return resp.status(200).json('OK');

        } catch (e) {
            console.log('Error in inquiry : ' + e);
            return resp.status(500).json('Internal Server Error');
        }
    } else {
        return resp.status(405).json('Method Not Allowed');
    }
}