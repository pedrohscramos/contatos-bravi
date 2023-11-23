<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Person;
Use Log;

class PersonController extends Controller
{
    public function getAll(){
        $data = Person::get();
        return response()->json($data, 200);
    }
  
    public function create(Request $request){
        $data['name'] = $request['name'];
        $data['email'] = $request['email'];
        $data['phone'] = $request['phone'];
        Person::create($data);
        return response()->json([
            'message' => "Cadastro realizado com sucesso!",
            'success' => true
        ], 200);
    }
  
    public function delete($id){
        $res = Person::find($id)->delete();
        return response()->json([
            'message' => "Cadastro excluído com sucesso!",
            'success' => true
        ], 200);
    }
  
    public function get($id){
        $data = Person::find($id);
        return response()->json($data, 200);
    }
  
    public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['email'] = $request['email'];
        $data['phone'] = $request['phone'];
        Person::find($id)->update($data);
        return response()->json([
            'message' => "Cadastro Atualizado com sucesso!",
            'success' => true
        ], 200);
    }
}
