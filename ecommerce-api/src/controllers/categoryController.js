import Category from '../models/category';

async function getCategories(req, res){
    try{
        const categories = await Category.find().sort({name:1});
        res.json(categories);
    } catch(error){
        res.status(500).send({ error});
    }
};

async function getCategoryById(req, res){
    try{
        const id = req.params.id;
        const category = await Category.findById(id);
        if(!category){
            return res.status(404).json({error: 'Prodcut not found'});
        }
        res.json(category);
    } catch(error){
        res.status(500).send({ error});
    }
};


async function createCategory(req, res){
    try{
        const {name, description, price, stock, imagesUrl, category} = req.body;
        if(!name || !description || !price || !stock || !imagesUrl || !category){
            return res.status(400).json({error: 'All fields are required'});
        }
        const newCategory = await Category.create({name, description, price, stock, imagesUrl, category});
        res.status(201).json(newCategory);
    } catch(error){
        res.status(500).send({ error});
    }
};

async function updateCategory(req, res){
    try{
        const {id} = req.params;
        const {name, description, price, stock, imagesUrl, category} = req.body;
        if(!name || !description || !price || !stock || !imagesUrl || !category){
            return res.status(400).json({error: 'All fields are required'});
        }
        const updatedCategory = await Category.findByIdAndUpdate(id, {name, description, price, stock, imagesUrl, category});
        if(updatedCategory){
            return res.status(200).json(updateCategory);
        }else{
            return res.status(404).json({ error: 'Category not found'});
        }
    } catch(error){
        res.status(500).json({ error});        
    }
};

async function deleteCategory(req, res){
    try{
        const {id} = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        if(deletedCategory){
            return res.status(204);
        }else{
            return res.status(404).json({ error: 'Category not found'});
        }
    } catch(error){
        res.status(500).json({ error});
    }
};

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};