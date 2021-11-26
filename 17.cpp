
// 11. Дан вещественный двумерный массив 4 на 3 со значениями. Упорядочить cтроки по убыванию
void task11()
{
    int array[4][3];

    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            array[i][j] = random() % 10;
        }
    }

    for (int a = 0; a < 4; a++)
    {
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 2; j++)
            {
                if (array[a][j] < array[a][j + 1])
                {
                    int temp = array[a][j];
                    array[a][j] = array[a][j + 1];
                    array[a][j + 1] = temp;
                }
            }
        }
    }

    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << array[i][j] << " ";
        }
        cout << endl;
    }
}
